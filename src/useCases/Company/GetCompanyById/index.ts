import { CompanyRepository } from "../../../repositories/CompanyRepository";
import { GetCompanyByIdController } from "./GetCompanyByIdController";
import { GetCompanyByIdUseCase } from "./GetCompanyByIdUseCase";

const companyRepository = CompanyRepository.getInstance();

const getCompanyByIdUseCase = new GetCompanyByIdUseCase(companyRepository);

const getCompanyByIdController = new GetCompanyByIdController(
  getCompanyByIdUseCase
);

export { getCompanyByIdController, getCompanyByIdUseCase };
