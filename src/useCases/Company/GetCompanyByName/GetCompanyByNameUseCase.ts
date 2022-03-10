import { ICompanyRepository } from "../../../repositories/CompanyRepository";

export class GetCompanyByNameUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(name: string) {
    return await this.companyRepository.getByName(name);
  }
}
