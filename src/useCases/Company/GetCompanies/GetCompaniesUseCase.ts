import { CompanyRepository } from "../../../repositories/CompanyRepository";

export class GetCompaniesUseCase {
  constructor(private companyRepository: CompanyRepository) {}

  async execute() {
    return await this.companyRepository.getAll();
  }
}
