import { Model } from "objection";
import BaseModel from "./BaseModel";
import Company from "./Company";

export interface IDesktop {
  id: number;
  platform: string;
  type: string;
  os: string;
  ip: string;
  company_id: number;
}

interface Desktop extends IDesktop {}

class Desktop extends BaseModel {
  static tableName = "desktop";

  readonly id!: number;
  platform!: string;
  type!: string;
  os!: string;
  ip!: string;

  company_id!: number;
  company?: Company;

  static relationMappings = {
    company: {
      relation: Model.BelongsToOneRelation,
      modelClass: "Company",
      join: {
        from: "desktop.company_id",
        to: "company.id",
      },
    },
  };
}

export default Desktop;
