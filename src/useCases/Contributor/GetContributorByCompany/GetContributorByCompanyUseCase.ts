import { ContributorRepository } from "../../../repositories/ContributorRepository";

export class GetContributorByCompanyUseCase {
  constructor(private contributorRepository: ContributorRepository) {}

  async execute(companyId: number): Promise<any> {
    const contributorList = await this.contributorRepository.getByCompanyId(
      companyId
    );

    return contributorList;
  }
}
