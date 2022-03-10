import { IContributorRepository } from "../../../repositories/ContributorRepository";
import { IUpdateContributorDTO } from "./UpdateContributorDTO";

export class UpdateContributorUseCase {
  constructor(private contributorRepository: IContributorRepository) {}

  async execute(id: number, data: IUpdateContributorDTO) {
    const contributor = await this.contributorRepository.update(id, data);

    return contributor;
  }
}
