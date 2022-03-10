import { IComputerRepository } from "../../../repositories/ComputerRepository";

export class GetComputerByCompanyUseCase {
  constructor(private computerRepository: IComputerRepository) {}

  async execute(companyId: number) {
    const computerList = await this.computerRepository.getByCompanyId(
      companyId
    );

    return computerList;
  }
}
