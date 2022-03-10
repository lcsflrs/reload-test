import * as restify from "restify";
import { GetCompaniesUseCase } from "./GetCompaniesUseCase";

export class GetCompaniesController {
  constructor(private getCompaniesUseCase: GetCompaniesUseCase) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ) {
    try {
      const companies = await this.getCompaniesUseCase.execute();

      if (companies.length === 0) {
        res.send(404, {
          message: "No companies found.",
        });
      } else {
        res.send(200, companies);
      }
    } catch (err) {
      res.send(400, {
        // @ts-ignore
        message: err.message || "Unexpected error.",
      });

      return next(err);
    }
  }
}
