import { IComputerRepository } from "../../../repositories/ComputerRepository";

export class GetComputersUseCase {
  constructor(private computerRepository: IComputerRepository) {}

  async execute() {
    const computerList = await this.computerRepository.getAll();

    return computerList;
  }
}
