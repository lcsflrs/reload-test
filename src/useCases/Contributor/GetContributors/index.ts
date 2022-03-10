import { ContributorRepository } from "../../../repositories/ContributorRepository";
import { Repository } from "../../../repositories/Repository";
import { GetContributorsController } from "./GetContributorsController";
import { GetContributorsUseCase } from "./GetContributorsUseCase";

const contributorRepository = Repository.getRepositoryInstance(
  "contributor"
) as ContributorRepository;

const getContributorUseCase = new GetContributorsUseCase(contributorRepository);

const getContributorController = new GetContributorsController(
  getContributorUseCase
);

export { getContributorUseCase, getContributorController };
