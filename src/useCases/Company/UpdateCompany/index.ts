import { CompanyRepository } from "../../../repositories/CompanyRepository";
import { Repository } from "../../../repositories/Repository";
import { UpdateCompanyController } from "./UpdateCompanyController";
import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

const companyRepository = Repository.getRepositoryInstance(
  "company"
) as CompanyRepository;

const updateCompanyUseCase = new UpdateCompanyUseCase(companyRepository);

const updateCompanyController = new UpdateCompanyController(
  updateCompanyUseCase
);

export { updateCompanyUseCase, updateCompanyController };
