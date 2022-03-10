import { CompanyRepository } from "../../../repositories/CompanyRepository";
import { Repository } from "../../../repositories/Repository";
import { DeleteCompanyController } from "./DeleteCompanyController";
import { DeleteCompanyUseCase } from "./DeleteCompanyUseCase";

const companyRepository = Repository.getRepositoryInstance(
  "company"
) as CompanyRepository;

const deleteCompanyUseCase = new DeleteCompanyUseCase(companyRepository);

const deleteCompanyController = new DeleteCompanyController(
  deleteCompanyUseCase
);

export { deleteCompanyController, deleteCompanyUseCase };
