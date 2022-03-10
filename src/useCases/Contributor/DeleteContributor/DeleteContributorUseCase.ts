import { IContributorRepository } from "../../../repositories/ContributorRepository";

export class DeleteContributorUseCase {
  constructor(private contributorRepository: IContributorRepository) {}

  async execute(id: number) {
    await this.contributorRepository.delete(id);
  }
}
