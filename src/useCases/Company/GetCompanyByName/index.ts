import { CompanyRepository } from "../../../repositories/CompanyRepository";
import { Repository } from "../../../repositories/Repository";
import { GetCompanyByNameController } from "./GetCompanyByNameController";
import { GetCompanyByNameUseCase } from "./GetCompanyByNameUseCase";

const companyRepository = Repository.getRepositoryInstance(
  "company"
) as CompanyRepository;

const getCompanyByNameUseCase = new GetCompanyByNameUseCase(companyRepository);

const getCompanyByNameController = new GetCompanyByNameController(
  getCompanyByNameUseCase
);

export { getCompanyByNameUseCase, getCompanyByNameController };
