import { ContributorRepository } from "../../../repositories/ContributorRepository";
import { Repository } from "../../../repositories/Repository";
import { UpdateContributorController } from "./UpdateContributorController";
import { UpdateContributorUseCase } from "./UpdateContributorUseCase";

const contributorRepository = Repository.getRepositoryInstance(
  "contributor"
) as ContributorRepository;

const updateContributorUseCase = new UpdateContributorUseCase(
  contributorRepository
);

const updateContributorController = new UpdateContributorController(
  updateContributorUseCase
);

export { updateContributorUseCase, updateContributorController };
