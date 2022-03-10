import * as restify from "restify";
import { UpdateContributorUseCase } from "./UpdateContributorUseCase";

export class UpdateContributorController {
  constructor(private updateContributorUseCase: UpdateContributorUseCase) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ) {
    const { id } = req.params;

    try {
      const contributor = await this.updateContributorUseCase.execute(id, {
        firstName: req.body.firstName ?? undefined,
        lastName: req.body.lastName ?? undefined,
        title: req.body.title ?? undefined,
        jobTitle: req.body.jobTitle ?? undefined,
        age: req.body.age ?? undefined,
      });

      res.send(200, {
        message: "Contributor updated",
        contributor,
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
