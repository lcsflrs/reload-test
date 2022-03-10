import { ComputerRepository } from "../../../repositories/ComputerRepository";
import { DeleteComputerController } from "./DeleteComputerController";
import { DeleteComputerUseCase } from "./DeleteComputerUseCase";

const computerRepository = ComputerRepository.getInstance();

const deleteComputerUseCase = new DeleteComputerUseCase(computerRepository);

const deleteComputerController = new DeleteComputerController(
  deleteComputerUseCase
);

export { deleteComputerUseCase, deleteComputerController };
