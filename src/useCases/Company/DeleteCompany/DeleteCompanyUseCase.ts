import { ICompanyRepository } from "../../../repositories/CompanyRepository";

export class DeleteCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(id: number) {
    return await this.companyRepository.delete(id);
  }
}
