import { ComputerRepository } from "../../../repositories/ComputerRepository";
import { GetComputersController } from "./GetComputersController";
import { GetComputersUseCase } from "./GetComputersUseCase";

const computerRepository = ComputerRepository.getInstance();

const getComputerUseCase = new GetComputersUseCase(computerRepository);

const getComputerController = new GetComputersController(getComputerUseCase);

export { getComputerUseCase, getComputerController };
