import { CompanyRepository } from "./CompanyRepository";
import { ComputerRepository } from "./ComputerRepository";
import { ContributorRepository } from "./ContributorRepository";

export type RepositoryName = "company" | "computer" | "contributor";

export class Repository {
  static getRepositoryInstance(type: RepositoryName) {
    switch (type) {
      case "company":
        return CompanyRepository.getInstance();
      case "computer":
        return ComputerRepository.getInstance();
      case "contributor":
        return ContributorRepository.getInstance();
      default:
        throw new Error("Repository not found");
    }
  }
}
