import { CompanyRepository } from "../../../repositories/CompanyRepository";
import { Repository } from "../../../repositories/Repository";
import { GetCompaniesController } from "./GetCompaniesController";
import { GetCompaniesUseCase } from "./GetCompaniesUseCase";

const companyRepository = Repository.getRepositoryInstance(
  "company"
) as CompanyRepository;

const getCompaniesUseCase = new GetCompaniesUseCase(companyRepository);

const getCompaniesController = new GetCompaniesController(getCompaniesUseCase);

export { getCompaniesUseCase, getCompaniesController };
