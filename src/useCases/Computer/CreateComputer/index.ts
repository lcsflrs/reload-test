import { ComputerRepository } from "../../../repositories/ComputerRepository";
import { Repository } from "../../../repositories/Repository";
import { CreateComputerController } from "./CreateComputerController";
import { CreateComputerUseCase } from "./CreateComputerUseCase";

const computerRepository = Repository.getRepositoryInstance(
  "computer"
) as ComputerRepository;

const createComputerUseCase = new CreateComputerUseCase(computerRepository);

const createComputerController = new CreateComputerController(
  createComputerUseCase
);

export { createComputerUseCase, createComputerController };
