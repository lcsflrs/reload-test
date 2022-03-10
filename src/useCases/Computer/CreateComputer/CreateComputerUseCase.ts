import { IComputerRepository } from "../../../repositories/ComputerRepository";
import { ICreateComputerDTO } from "./CreateComputerDTO";

export class CreateComputerUseCase {
  constructor(private computerRepository: IComputerRepository) {}

  async execute(data: ICreateComputerDTO) {
    await this.computerRepository.save(data);
  }
}
