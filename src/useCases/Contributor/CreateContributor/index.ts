import { ContributorRepository } from "../../../repositories/ContributorRepository";
import { CreateContributorController } from "./CreateContributorController";
import { CreateContributorUseCase } from "./CreateContributorUseCase";

const contributorRepository = ContributorRepository.getInstance();

const createContributorUseCase = new CreateContributorUseCase(
  contributorRepository
);

const createContributorController = new CreateContributorController(
  createContributorUseCase
);

export { createContributorUseCase, createContributorController };
