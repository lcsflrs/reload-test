import { ContributorRepository } from "../../../repositories/ContributorRepository";
import { DeleteContributorController } from "./DeleteContributorController";
import { DeleteContributorUseCase } from "./DeleteContributorUseCase";

const contributorRepository = ContributorRepository.getInstance();

const deleteContributorUseCase = new DeleteContributorUseCase(
  contributorRepository
);

const deleteContributorController = new DeleteContributorController(
  deleteContributorUseCase
);

export { deleteContributorController, deleteContributorUseCase };
