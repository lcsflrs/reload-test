import Company from "../../../../models/Company";

export class GetCompanyByIdUseCaseMock {
  async execute(id: number) {
    const companies = [
      {
        id: 1,
        business_name: "Company 1",
        suffix: "S.A.",
        industry: "Industry 1",
        catch_phrase: "Catch phrase 1",
        bs_company_statement: "BS 1",
        logo: "Logo 1",
        type: "Type 1",
        phone_number: "Phone 1",
        full_address: "Address 1",
        latitute: "Lat 1",
        longitude: "Long 1",
        contributors: [
          {
            id: 1,
            first_name: "First 1",
            last_name: "Last 1",
            title: "Title 1",
            job_title: "Job 1",
            age: 1,
            company_id: 1,
          },
        ],
        desktops: [
          {
            id: 1,
            platform: "Platform 1",
            type: "Type 1",
            os: "OS 1",
            ip: "IP 1",
            company_id: 1,
          },
        ],
      },
    ];

    const company = companies.find((c) => c.id === id) as Company;

    return company;
  }
}
