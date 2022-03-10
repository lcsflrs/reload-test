import { CompanyRepository } from "../../../repositories/CompanyRepository";
import { GetCompaniesController } from "./GetCompaniesController";
import { GetCompaniesUseCase } from "./GetCompaniesUseCase";

const companyRepository = CompanyRepository.getInstance();

const getCompaniesUseCase = new GetCompaniesUseCase(companyRepository);

const getCompaniesController = new GetCompaniesController(getCompaniesUseCase);

export { getCompaniesUseCase, getCompaniesController };
