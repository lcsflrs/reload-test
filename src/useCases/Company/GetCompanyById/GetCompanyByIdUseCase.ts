import { ICompanyRepository } from "../../../repositories/CompanyRepository";

export class GetCompanyByIdUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(id: number) {
    return await this.companyRepository.getById(id);
  }
}
