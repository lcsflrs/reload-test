import Contributor from "../models/Contributor";
import { ICreateContributorDTO } from "../useCases/Contributor/CreateContributor/CreateContributorDTO";
import { IUpdateContributorDTO } from "../useCases/Contributor/UpdateContributor/UpdateContributorDTO";

export interface IContributorRepository {
  getAll(): Promise<Contributor[]>;
  getByCompanyId(companyId: number): Promise<Contributor[]>;
  save(data: ICreateContributorDTO): Promise<void>;
  delete(companyId: number): Promise<void>;
  update(id: number, data: IUpdateContributorDTO): Promise<Contributor>;
}

export class ContributorRepository implements IContributorRepository {
  static instance: ContributorRepository;

  private constructor() {
    console.log("Singleton: ContributorRepository constructor called!");
  }

  public static getInstance(): ContributorRepository {
    if (!ContributorRepository.instance) {
      ContributorRepository.instance = new ContributorRepository();
    }
    return ContributorRepository.instance;
  }

  async getAll(): Promise<Contributor[]> {
    const contributorList = await Contributor.query();
    return contributorList;
  }

  async getByCompanyId(companyId: number): Promise<Contributor[]> {
    const contributorList = (await Contributor.query().where(
      "company_id",
      companyId
    )) as Contributor[];
    return contributorList;
  }

  async save(data: ICreateContributorDTO): Promise<void> {
    await Contributor.query().insert({
      first_name: data.firstName,
      last_name: data.lastName,
      title: data.title,
      job_title: data.jobTitle,
      age: data.age,
      company_id: data.companyId,
    });
    return;
  }

  // TODO verificar o motivo de demorar muito
  async delete(id: number): Promise<void> {
    const findContributor = await Contributor.query().findById(id);
    if (!findContributor) {
      throw new Error("Contributor not found");
    }

    await Contributor.query().where("id", id).del();
    return;
  }

  async update(id: number, data: IUpdateContributorDTO): Promise<Contributor> {
    const findContributor = await Contributor.query().findById(id);
    if (!findContributor) {
      throw new Error("Contributor not found");
    }

    await Contributor.query().findById(id).patch({
      first_name: data.firstName,
      last_name: data.lastName,
      title: data.title,
      job_title: data.jobTitle,
      age: data.age,
    });

    const contributor = await Contributor.query().findById(id);
    if (!contributor) {
      throw new Error("Contributor not found");
    }
    return contributor;
  }
}
