import * as restify from "restify";
import { GetCompanyByIdUseCase } from "./GetCompanyByIdUseCase";

export class GetCompanyByIdController {
  constructor(private getCompanyByIdUseCase: GetCompanyByIdUseCase) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ) {
    try {
      const company = await this.getCompanyByIdUseCase.execute(req.params.id);

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
