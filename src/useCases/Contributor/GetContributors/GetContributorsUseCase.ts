import { ContributorRepository } from "../../../repositories/ContributorRepository";

export class GetContributorsUseCase {
  constructor(private contributorRepository: ContributorRepository) {}

  async execute(): Promise<any> {
    return this.contributorRepository.getAll();
  }
}
