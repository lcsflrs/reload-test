import { ComputerRepository } from "../../../repositories/ComputerRepository";
import { Repository } from "../../../repositories/Repository";
import { GetComputersController } from "./GetComputersController";
import { GetComputersUseCase } from "./GetComputersUseCase";

const computerRepository = Repository.getRepositoryInstance(
  "computer"
) as ComputerRepository;

const getComputerUseCase = new GetComputersUseCase(computerRepository);

const getComputerController = new GetComputersController(getComputerUseCase);

export { getComputerUseCase, getComputerController };
