import * as restify from "restify";
import { GetCompanyByNameUseCase } from "./GetCompanyByNameUseCase";

export class GetCompanyByNameController {
  constructor(private getCompanyByNameUseCase: GetCompanyByNameUseCase) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ) {
    try {
      const company = await this.getCompanyByNameUseCase.execute(
        req.params.name
      );

      if (!company) {
        res.send(404, {
          message: "No company found.",
        });
      } else {
        res.send(200, company);
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
