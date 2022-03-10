import { ContributorRepository } from "../../../repositories/ContributorRepository";
import { GetContributorByCompanyController } from "./GetContributorByCompanyController";
import { GetContributorByCompanyUseCase } from "./GetContributorByCompanyUseCase";

const contributorRepository = ContributorRepository.getInstance();

const getContributorByCompanyUseCase = new GetContributorByCompanyUseCase(
  contributorRepository
);

const getContributorByCompanyController = new GetContributorByCompanyController(
  getContributorByCompanyUseCase
);

export { getContributorByCompanyController, getContributorByCompanyUseCase };
