import * as restify from "restify";
import { DeleteComputerUseCase } from "./DeleteComputerUseCase";

export class DeleteComputerController {
  constructor(private deleteComputerUseCase: DeleteComputerUseCase) {}

  async handle(
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
  ) {
    try {
      await this.deleteComputerUseCase.execute(req.params.id);
      res.send(200, {
        message: "Computer deleted",
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
