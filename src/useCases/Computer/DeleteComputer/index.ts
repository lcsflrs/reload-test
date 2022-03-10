import { ComputerRepository } from "../../../repositories/ComputerRepository";
import { Repository } from "../../../repositories/Repository";
import { DeleteComputerController } from "./DeleteComputerController";
import { DeleteComputerUseCase } from "./DeleteComputerUseCase";

const computerRepository = Repository.getRepositoryInstance(
  "computer"
) as ComputerRepository;

const deleteComputerUseCase = new DeleteComputerUseCase(computerRepository);

const deleteComputerController = new DeleteComputerController(
  deleteComputerUseCase
);

export { deleteComputerUseCase, deleteComputerController };
