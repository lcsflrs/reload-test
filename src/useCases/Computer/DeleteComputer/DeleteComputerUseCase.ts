import { IComputerRepository } from "../../../repositories/ComputerRepository";

export class DeleteComputerUseCase {
  constructor(private computerRepository: IComputerRepository) {}

  async execute(id: number) {
    await this.computerRepository.delete(id);
  }
}
