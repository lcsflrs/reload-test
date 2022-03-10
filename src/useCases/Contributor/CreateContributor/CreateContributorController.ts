import * as restify from "restify";
import { CreateContributorUseCase } from "./CreateContributorUseCase";

export class CreateContributorController {
  constructor(private createContributorUseCase: CreateContributorUseCase) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ) {
    const { firstName, lastName, title, jobTitle, age, companyId } = req.body;

    try {
      await this.createContributorUseCase.execute({
        firstName,
        lastName,
        title,
        jobTitle,
        age,
        companyId,
      });

      res.send(201, {
        message: "Contributor created",
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
