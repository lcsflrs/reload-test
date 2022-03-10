import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import BaseModel from "./BaseModel";
import Company from "./Company";

export interface IContributor {
  id: number;
  first_name: string;
  last_name: string;
  title: string;
  job_title: string;
  age: number;
  company_id: number;
}

interface Contributor extends IContributor {}

class Contributor extends BaseModel {
  static tableName = "contributor";

  readonly id!: number;
  first_name!: string;
  last_name!: string;
  title!: string;
  job_title!: string;
  age!: number;

  company_id!: number;
  company?: Company;

  static relationMappings: RelationMappings | RelationMappingsThunk = {
    company: {
      relation: Model.BelongsToOneRelation,
      modelClass: "Company",
      join: {
        from: "contributor.company_id",
        to: "company.id",
      },
    },
  };
}

export default Contributor;
