import * as restify from "restify";
import { DeleteContributorUseCase } from "./DeleteContributorUseCase";

export class DeleteContributorController {
  constructor(private deleteContributorUseCase: DeleteContributorUseCase) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ) {
    try {
      await this.deleteContributorUseCase.execute(req.params.id);
      res.send(200, {
        message: "Contributor deleted",
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
