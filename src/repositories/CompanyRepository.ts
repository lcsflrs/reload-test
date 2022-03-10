import Company from "../models/Company";
import { IUpdateCompanyDTO } from "../useCases/Company/UpdateCompany/UpdateCompanyDTO";

export interface ICompanyRepository {
  getAll(): Promise<Company[]>;
  getById(id: number): Promise<Company>;
  getByName(name: string): Promise<Company>;
  delete(id: number): Promise<void>;
  update(id: number, data: IUpdateCompanyDTO): Promise<Company>;
}

export class CompanyRepository implements ICompanyRepository {
  static instance: CompanyRepository;

  private constructor() {
    console.log("Singleton: CompanyRepository constructor called!");
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
    const company = await Company.query()
      .findById(id)
      .withGraphFetched("[contributors, desktops]");
    if (!company) {
      throw new Error("Company not found");
    }
    return company;
  }

  async getByName(name: string) {
    const company = await Company.query()
      .findOne("business_name", name)
      .withGraphFetched("[contributors, desktops]");
    if (!company) {
      throw new Error("Company not found");
    }
    return company;
  }

  async delete(id: number) {
    const company = await Company.query().findById(id);
    if (!company) {
      throw new Error("Company not found");
    }
    await Company.query().deleteById(id);
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

    return company;
  }
}
