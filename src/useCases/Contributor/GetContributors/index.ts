import { ContributorRepository } from "../../../repositories/ContributorRepository";
import { GetContributorsController } from "./GetContributorsController";
import { GetContributorsUseCase } from "./GetContributorsUseCase";

const contributorRepository = ContributorRepository.getInstance();

const getContributorUseCase = new GetContributorsUseCase(contributorRepository);

const getContributorController = new GetContributorsController(
  getContributorUseCase
);

export { getContributorUseCase, getContributorController };
