import * as restify from "restify";
import { GetContributorByCompanyUseCase } from "./GetContributorByCompanyUseCase";

export class GetContributorByCompanyController {
  constructor(
    private getContributorByCompanyUseCase: GetContributorByCompanyUseCase
  ) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ): Promise<void> {
    try {
      const contributorList = await this.getContributorByCompanyUseCase.execute(
        req.params.companyId
      );

      if (contributorList.length === 0) {
        res.send(404, {
          message: "No contributors found for this company.",
        });
      } else {
        res.send(200, contributorList);
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
