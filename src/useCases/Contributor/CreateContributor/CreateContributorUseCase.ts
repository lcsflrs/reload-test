import { IContributorRepository } from "../../../repositories/ContributorRepository";
import { ICreateContributorDTO } from "./CreateContributorDTO";

export class CreateContributorUseCase {
  constructor(private contributorRepository: IContributorRepository) {}

  async execute(data: ICreateContributorDTO) {
    await this.contributorRepository.save(data);
  }
}
