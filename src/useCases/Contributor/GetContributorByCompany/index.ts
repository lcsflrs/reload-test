import { ContributorRepository } from "../../../repositories/ContributorRepository";
import { Repository } from "../../../repositories/Repository";
import { GetContributorByCompanyController } from "./GetContributorByCompanyController";
import { GetContributorByCompanyUseCase } from "./GetContributorByCompanyUseCase";

const contributorRepository = Repository.getRepositoryInstance(
  "contributor"
) as ContributorRepository;

const getContributorByCompanyUseCase = new GetContributorByCompanyUseCase(
  contributorRepository
);

const getContributorByCompanyController = new GetContributorByCompanyController(
  getContributorByCompanyUseCase
);

export { getContributorByCompanyController, getContributorByCompanyUseCase };
