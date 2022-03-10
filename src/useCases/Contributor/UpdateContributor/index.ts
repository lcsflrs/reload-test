import { ContributorRepository } from "../../../repositories/ContributorRepository";
import { UpdateContributorController } from "./UpdateContributorController";
import { UpdateContributorUseCase } from "./UpdateContributorUseCase";

const contributorRepository = ContributorRepository.getInstance();

const updateContributorUseCase = new UpdateContributorUseCase(
  contributorRepository
);

const updateContributorController = new UpdateContributorController(
  updateContributorUseCase
);

export { updateContributorUseCase, updateContributorController };
