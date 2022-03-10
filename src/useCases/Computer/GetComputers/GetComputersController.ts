import * as restify from "restify";
import { GetComputersUseCase } from "./GetComputersUseCase";

export class GetComputersController {
  constructor(private getComputerUseCase: GetComputersUseCase) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ): Promise<void> {
    try {
      const computerList = await this.getComputerUseCase.execute();

      res.send(200, computerList);

      return next();
    } catch (err) {
      res.send(400, {
        // @ts-ignore
        message: err.message || "Unexpected error.",
      });

      return next(err);
    }
  }
}
