import * as restifyTypes from "restify";
import { GetCompanyByIdController } from "../GetCompanyByIdController";
import { GetCompanyByIdUseCase } from "../GetCompanyByIdUseCase";
import { GetCompanyByIdUseCaseMock } from "../__mocks__/GetCompanyByIdUseCaseMock";

describe("In GetCompanyById", () => {
  const request = require("supertest");
  const restify = require("restify");
  const app = restify.createServer();

  const getCompanyByIdUseCase = new GetCompanyByIdUseCaseMock();

  const getCompanyByIdController = new GetCompanyByIdController(
    getCompanyByIdUseCase as GetCompanyByIdUseCase
  );

  app.get(
    "/companies/:id",
    (
      req: restifyTypes.Request,
      res: restifyTypes.Response,
      next: restifyTypes.Next
    ) => {
      return getCompanyByIdController.handle(req, res, next);
    }
  );

  it("should return a company", () => {
    request(app).get("/companies/1").expect(200).expect({
      id: 1,
      name: "Company 1",
    });

    app.close();
  });

  it("should return not found", () => {
    request(app).get("/companies/2").expect(404).expect({
      message: "No company found.",
    });

    app.close();
  });
});
