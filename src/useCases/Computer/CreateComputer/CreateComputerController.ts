import * as restify from "restify";
import { CreateComputerUseCase } from "./CreateComputerUseCase";
export class CreateComputerController {
  constructor(private createComputerUseCase: CreateComputerUseCase) {}

  async handle(
    request: restify.Request,
    res: restify.Response,
    next: restify.Next
  ): Promise<void> {
    const { platform, type, os, ip, companyId } = request.body;

    try {
      await this.createComputerUseCase.execute({
        platform,
        type,
        os,
        ip,
        companyId,
      });

      res.send(201, {
        message: "Computer created",
      });

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
