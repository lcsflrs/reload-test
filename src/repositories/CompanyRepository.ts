import Company from "../models/Company";
import { getRedis, removeRedis, setRedis } from "../redisConfig";
import { IUpdateCompanyDTO } from "../useCases/Company/UpdateCompany/UpdateCompanyDTO";

export interface ICompanyRepository {
  getAll(): Promise<Company[]>;
  getById(id: number): Promise<Company>;
  getByName(name: string): Promise<Company[]>;
  delete(id: number): Promise<void>;
  update(id: number, data: IUpdateCompanyDTO): Promise<Company>;
}

export class CompanyRepository implements ICompanyRepository {
  static instance: CompanyRepository;

  private constructor() {
    console.log(
      "Singleton Design Pattern: CompanyRepository constructor called!"
    );
  }

  public static getInstance(): CompanyRepository {
    if (!CompanyRepository.instance) {
      CompanyRepository.instance = new CompanyRepository();
    }
    return CompanyRepository.instance;
  }

  async getAll() {
    const companyList = await Company.query().withGraphFetched(
      "[contributors, desktops]"
    );
    return companyList;
  }

  async getById(id: number) {
    let companyRedis = (await getRedis(`company:${id}`)) as string;
    if (companyRedis) {
      console.log("Redis: Found in cache");
      return JSON.parse(companyRedis) as Company;
    }

    console.log("Not found in cache");
    const company = await Company.query()
      .findById(id)
      .withGraphFetched("[contributors, desktops]");
    if (!company) {
      throw new Error("Company not found");
    }
    await setRedis(`company:${id}`, JSON.stringify(company));

    return company;
  }

  async getByName(name: string) {
    const companies = await Company.query()
      .where("business_name", name)
      .withGraphFetched("[contributors, desktops]");
    if (companies.length === 0) {
      throw new Error("Company not found");
    }

    companies.forEach(
      async (company) =>
        await setRedis(`company:${company.id}`, JSON.stringify(company))
    );
    return companies;
  }

  async delete(id: number) {
    const company = await Company.query().findById(id);
    if (!company) {
      throw new Error("Company not found");
    }
    await Company.query().deleteById(id);
    let companyRedis = (await getRedis(`company:${id}`)) as string;
    if (companyRedis) {
      console.log("Removed from cache");
      await removeRedis(`company:${id}`);
    }
    return;
  }

  async update(id: number, data: IUpdateCompanyDTO) {
    let company = await Company.query().findById(id);
    if (!company) {
      throw new Error("Company not found");
    }

    await Company.query().findById(id).patch(data);

    company = await Company.query()
      .findById(id)
      .withGraphFetched("[contributors, desktops]");
    if (!company) {
      throw new Error("Company not found");
    }

    await setRedis(`company:${id}`, JSON.stringify(company));

    return company;
  }
}
