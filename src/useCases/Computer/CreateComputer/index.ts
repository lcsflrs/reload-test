import { ComputerRepository } from "../../../repositories/ComputerRepository";
import { CreateComputerController } from "./CreateComputerController";
import { CreateComputerUseCase } from "./CreateComputerUseCase";

const computerRepository = ComputerRepository.getInstance();

const createComputerUseCase = new CreateComputerUseCase(computerRepository);

const createComputerController = new CreateComputerController(
  createComputerUseCase
);

export { createComputerUseCase, createComputerController };
