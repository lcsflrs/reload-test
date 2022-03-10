import { ContributorRepository } from "../../../repositories/ContributorRepository";
import { Repository } from "../../../repositories/Repository";
import { CreateContributorController } from "./CreateContributorController";
import { CreateContributorUseCase } from "./CreateContributorUseCase";

const contributorRepository = Repository.getRepositoryInstance(
  "contributor"
) as ContributorRepository;

const createContributorUseCase = new CreateContributorUseCase(
  contributorRepository
);

const createContributorController = new CreateContributorController(
  createContributorUseCase
);

export { createContributorUseCase, createContributorController };
