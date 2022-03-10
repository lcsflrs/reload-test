import { CompanyRepository } from "../../../repositories/CompanyRepository";
import { GetCompanyByNameController } from "./GetCompanyByNameController";
import { GetCompanyByNameUseCase } from "./GetCompanyByNameUseCase";

const companyRepository = CompanyRepository.getInstance();

const getCompanyByNameUseCase = new GetCompanyByNameUseCase(companyRepository);

const getCompanyByNameController = new GetCompanyByNameController(
  getCompanyByNameUseCase
);

export { getCompanyByNameUseCase, getCompanyByNameController };
