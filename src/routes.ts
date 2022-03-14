import * as restify from "restify";
import { deleteCompanyController } from "./useCases/Company/DeleteCompany";
import { getCompaniesController } from "./useCases/Company/GetCompanies";
import { getCompanyByIdController } from "./useCases/Company/GetCompanyById";
import { getCompanyByNameController } from "./useCases/Company/GetCompanyByName";
import { updateCompanyController } from "./useCases/Company/UpdateCompany";
import { createComputerController } from "./useCases/Computer/CreateComputer";
import { deleteComputerController } from "./useCases/Computer/DeleteComputer";
import { getComputerByCompanyController } from "./useCases/Computer/GetComputerByCompany";
import { getComputerController } from "./useCases/Computer/GetComputers";
import { createContributorController } from "./useCases/Contributor/CreateContributor";
import { deleteContributorController } from "./useCases/Contributor/DeleteContributor";
import { getContributorByCompanyController } from "./useCases/Contributor/GetContributorByCompany";
import { getContributorController } from "./useCases/Contributor/GetContributors";
import { updateContributorController } from "./useCases/Contributor/UpdateContributor";

function routes(server: restify.Server) {
  server.get("/", (req, res, next) => {
    res.send(200, "Hello World! aaa");
    return next();
  });

  /**
   * * Company
   */
  server.get(
    "/companies",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return getCompaniesController.handle(req, res, next);
    }
  );

  server.get(
    "/companies/:id",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return getCompanyByIdController.handle(req, res, next);
    }
  );

  server.get(
    "/companies/name/:name",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return getCompanyByNameController.handle(req, res, next);
    }
  );

  server.del(
    "/companies/:id",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return deleteCompanyController.handle(req, res, next);
    }
  );

  server.put(
    "/companies/:id",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return updateCompanyController.handle(req, res, next);
    }
  );

  /**
   * * Contributor
   */
  server.get(
    "/contributors",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return getContributorController.handle(req, res, next);
    }
  );

  server.get(
    "/contributors/:companyId",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return getContributorByCompanyController.handle(req, res, next);
    }
  );

  server.post(
    "/contributors",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return createContributorController.handle(req, res, next);
    }
  );

  server.del(
    "/contributors/:id",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return deleteContributorController.handle(req, res, next);
    }
  );

  server.put(
    "/contributors/:id",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return updateContributorController.handle(req, res, next);
    }
  );

  /**
   * * Computer
   */
  server.get(
    "/computers",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return getComputerController.handle(req, res, next);
    }
  );

  server.get(
    "/computers/:companyId",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return getComputerByCompanyController.handle(req, res, next);
    }
  );

  server.post(
    "/computers",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return createComputerController.handle(req, res, next);
    }
  );

  server.del(
    "/computers/:id",
    (req: restify.Request, res: restify.Response, next: restify.Next) => {
      return deleteComputerController.handle(req, res, next);
    }
  );
}

module.exports.routes = routes;
