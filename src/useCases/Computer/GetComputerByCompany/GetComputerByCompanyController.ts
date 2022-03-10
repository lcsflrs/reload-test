import * as restify from "restify";
import { GetComputerByCompanyUseCase } from "./GetComputerByCompanyUseCase";

export class GetComputerByCompanyController {
  constructor(
    private getComputerByCompanyUseCase: GetComputerByCompanyUseCase
  ) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ): Promise<void> {
    try {
      const computerList = await this.getComputerByCompanyUseCase.execute(
        req.params.companyId
      );

      if (computerList.length === 0) {
        res.send(404, {
          message: "No computers found for this company.",
        });
      } else {
        res.send(200, computerList);
      }

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
