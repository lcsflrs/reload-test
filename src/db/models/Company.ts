import { Model } from "objection";
import BaseModel from "./BaseModel";
import Contributor from "./Contributor";
import Desktop from "./Desktop";

export interface ICompany {
  id: number;
  business_name: string;
  suffix: string;
  industry: string;
  catch_phrase: string;
  bs_company_statement: string;
  logo: string;
  type: string;
  phone_number: string;
  full_address: string;
  latitute: string;
  longitude: string;

  contributors?: Contributor[];
  desktops?: Desktop[];
}

interface Company extends ICompany {}

class Company extends BaseModel {
  static tableName = "company";

  readonly id!: number;
  business_name!: string;
  suffix!: string;
  industry!: string;
  catch_phrase!: string;
  bs_company_statement!: string;
  logo!: string;
  type!: string;
  phone_number!: string;
  full_address!: string;
  latitute!: string;
  longitude!: string;

  contributors?: Contributor[];
  desktops?: Desktop[];

  static relationMappings = {
    contributors: {
      relation: Model.HasManyRelation,
      modelClass: "Contributor",
      join: {
        from: "company.id",
        to: "contributor.company_id",
      },
    },
    desktops: {
      relation: Model.HasManyRelation,
      modelClass: "Desktop",
      join: {
        from: "company.id",
        to: "desktop.company_id",
      },
    },
  };
}

export default Company;
