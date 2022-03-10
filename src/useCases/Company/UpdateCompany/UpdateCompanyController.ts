import * as restify from "restify";
import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

export class UpdateCompanyController {
  constructor(private updateCompanyUseCase: UpdateCompanyUseCase) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ) {
    try {
      const company = await this.updateCompanyUseCase.execute(req.params.id, {
        businessName: req.body.businessName ?? undefined,
        suffix: req.body.suffix ?? undefined,
        title: req.body.title ?? undefined,
        industry: req.body.industry ?? undefined,
        catchPhrase: req.body.catchPhrase ?? undefined,
        bsCompanyStatement: req.body.bsCompanyStatement ?? undefined,
        phoneNumber: req.body.phoneNumber ?? undefined,
      });

      res.send(200, {
        message: "Company updated",
        company,
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
