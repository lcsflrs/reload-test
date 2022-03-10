import { ComputerRepository } from "../../../repositories/ComputerRepository";
import { Repository } from "../../../repositories/Repository";
import { GetComputerByCompanyController } from "./GetComputerByCompanyController";
import { GetComputerByCompanyUseCase } from "./GetComputerByCompanyUseCase";

const computerRepository = Repository.getRepositoryInstance(
  "computer"
) as ComputerRepository;

const getComputerByCompanyUseCase = new GetComputerByCompanyUseCase(
  computerRepository
);

const getComputerByCompanyController = new GetComputerByCompanyController(
  getComputerByCompanyUseCase
);

export { getComputerByCompanyUseCase, getComputerByCompanyController };
