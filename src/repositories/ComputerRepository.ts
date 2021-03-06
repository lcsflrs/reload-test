import Desktop from "../models/Desktop";
import { removeRedis } from "../redisConfig";
import { ICreateComputerDTO } from "../useCases/Computer/CreateComputer/CreateComputerDTO";

export interface IComputerRepository {
  getAll(): Promise<Desktop[]>;
  getByCompanyId(companyId: number): Promise<Desktop[]>;
  save(data: ICreateComputerDTO): Promise<void>;
  delete(id: number): Promise<void>;
}

export class ComputerRepository implements IComputerRepository {
  static instance: ComputerRepository;

  private constructor() {
    console.log(
      "Singleton Design Pattern: ComputerRepository constructor called!"
    );
  }

  public static getInstance(): ComputerRepository {
    if (!ComputerRepository.instance) {
      ComputerRepository.instance = new ComputerRepository();
    }
    return ComputerRepository.instance;
  }

  async getAll(): Promise<Desktop[]> {
    const desktopList = await Desktop.query();
    return desktopList;
  }

  async getByCompanyId(companyId: number): Promise<Desktop[]> {
    const desktopList = (await Desktop.query().where(
      "company_id",
      companyId
    )) as Desktop[];
    return desktopList;
  }

  async save(data: ICreateComputerDTO): Promise<void> {
    await Desktop.query().insert(data);
    await removeRedis(`company:${data.companyId}`);
    return;
  }

  async delete(id: number): Promise<void> {
    const findComputer = await Desktop.query().findById(id);
    if (!findComputer) {
      throw new Error("Computer not found");
    }

    await removeRedis(`company:${findComputer.company_id}`);
    await Desktop.query().where("id", id).del();
    return;
  }
}
