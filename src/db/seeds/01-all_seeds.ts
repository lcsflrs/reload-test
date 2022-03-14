import { PartialModelGraph } from "objection";
import Company from "../../models/Company";
import Desktop from "../../models/Desktop";
import { bindModels } from "../../utils/objection";

export async function seed(): Promise<any> {
  bindModels();

  const jsonData: Company[] = require("./dataset.json");

  const companiesData = jsonData.map((data): PartialModelGraph<Company> => {
    const {
      bs_company_statement,
      business_name,
      catch_phrase,
      full_address,
      industry,
      latitute,
      logo,
      longitude,
      phone_number,
      suffix,
      type,
      contributors,
      desktops,
    } = data;

    const insertDesktops = (desktops ?? []).map(
      (desktop): PartialModelGraph<Desktop> => {
        const { ip, os, platform, type } = desktop;

        return {
          ip,
          os,
          platform,
          type,
        };
      }
    );

    return {
      bs_company_statement,
      business_name,
      catch_phrase,
      full_address,
      industry,
      latitute,
      logo,
      longitude,
      phone_number,
      suffix,
      type,
      contributors,
      desktops: insertDesktops,
    };
  });

  await Company.query().insertGraph(companiesData);
}
