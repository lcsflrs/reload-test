import { ICompanyRepository } from "../../../repositories/CompanyRepository";
import { IUpdateCompanyDTO } from "./UpdateCompanyDTO";

export class UpdateCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(id: number, data: IUpdateCompanyDTO) {
    const company = await this.companyRepository.update(id, data);

    return company;
  }
}
