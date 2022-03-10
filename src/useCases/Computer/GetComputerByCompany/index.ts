import { ComputerRepository } from "../../../repositories/ComputerRepository";
import { GetComputerByCompanyController } from "./GetComputerByCompanyController";
import { GetComputerByCompanyUseCase } from "./GetComputerByCompanyUseCase";

const computerRepository = ComputerRepository.getInstance();

const getComputerByCompanyUseCase = new GetComputerByCompanyUseCase(
  computerRepository
);

const getComputerByCompanyController = new GetComputerByCompanyController(
  getComputerByCompanyUseCase
);

export { getComputerByCompanyUseCase, getComputerByCompanyController };
