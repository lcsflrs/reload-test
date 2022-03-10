import { CompanyRepository } from "../../../repositories/CompanyRepository";
import { Repository } from "../../../repositories/Repository";
import { GetCompanyByIdController } from "./GetCompanyByIdController";
import { GetCompanyByIdUseCase } from "./GetCompanyByIdUseCase";

const companyRepository = Repository.getRepositoryInstance(
  "company"
) as CompanyRepository;

const getCompanyByIdUseCase = new GetCompanyByIdUseCase(companyRepository);

const getCompanyByIdController = new GetCompanyByIdController(
  getCompanyByIdUseCase
);

export { getCompanyByIdController, getCompanyByIdUseCase };
