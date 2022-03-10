import * as restify from "restify";
import { DeleteCompanyUseCase } from "./DeleteCompanyUseCase";

export class DeleteCompanyController {
  constructor(private deleteCompanyUseCase: DeleteCompanyUseCase) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ) {
    try {
      await this.deleteCompanyUseCase.execute(req.params.id);

      res.send(204, {
        message: "Company deleted",
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
