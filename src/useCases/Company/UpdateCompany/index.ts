import { CompanyRepository } from "../../../repositories/CompanyRepository";
import { UpdateCompanyController } from "./UpdateCompanyController";
import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

const companyRepository = CompanyRepository.getInstance();

const updateCompanyUseCase = new UpdateCompanyUseCase(companyRepository);

const updateCompanyController = new UpdateCompanyController(
  updateCompanyUseCase
);

export { updateCompanyUseCase, updateCompanyController };
