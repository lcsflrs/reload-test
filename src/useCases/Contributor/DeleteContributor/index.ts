import { ContributorRepository } from "../../../repositories/ContributorRepository";
import { Repository } from "../../../repositories/Repository";
import { DeleteContributorController } from "./DeleteContributorController";
import { DeleteContributorUseCase } from "./DeleteContributorUseCase";

const contributorRepository = Repository.getRepositoryInstance(
  "contributor"
) as ContributorRepository;

const deleteContributorUseCase = new DeleteContributorUseCase(
  contributorRepository
);

const deleteContributorController = new DeleteContributorController(
  deleteContributorUseCase
);

export { deleteContributorController, deleteContributorUseCase };
