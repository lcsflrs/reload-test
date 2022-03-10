import * as restify from "restify";
import { GetContributorsUseCase } from "./GetContributorsUseCase";

export class GetContributorsController {
  constructor(private getContributorUseCase: GetContributorsUseCase) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ) {
    try {
      const contributorList = await this.getContributorUseCase.execute();

      res.send(200, contributorList);

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
