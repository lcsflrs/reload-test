import { PartialModelGraph } from "objection";
import Company from "../../models/Company";
import Desktop from "../../models/Desktop";
import { bindModels } from "../../utils/objection";

export async function seed(): Promise<any> {
  bindModels();

  const jsonData: Company[] = require("./dataset.json");

  // console.log(jsonData[0])
  // return;

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

  // await Company.query().insertGraph({
  //   bs_company_statement: "asd",
  //   business_name: "asd",
  //   catch_phrase: "asd",
  //   full_address: "asd",
  //   industry: "asd",
  //   latitute: "asd",
  //   logo: "asd",
  //   longitude: "asd",
  //   phone_number: "asd",
  //   suffix: "asd",
  //   type: "asd",
  //   contributors: [
  //     {
  //       firstName: "asd",
  //       lastName: "asd",
  //       title: "asd",
  //       jobTitle: "asd",
  //       age: 25,
  //     },
  //   ],
  //   desktops: [
  //     {
  //       ip: "asd",
  //       os: "asd",
  //       platform: "asd",
  //       type: "asd",
  //     },
  //   ],
  // });
}
