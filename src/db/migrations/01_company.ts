import { Knex } from "knex";

export async function up({ schema }: Knex): Promise<any> {
  await schema.createTable("company", (table) => {
    table.increments("id").unsigned().primary();
    table.string("business_name").notNullable().defaultTo("");
    table.string("suffix").notNullable().defaultTo("");
    table.string("industry").notNullable().defaultTo("");
    table.string("catch_phrase").notNullable().defaultTo("");
    table.string("bs_company_statement").notNullable().defaultTo("");
    table.string("logo").notNullable().defaultTo("");
    table.string("type").notNullable().defaultTo("");
    table.string("phone_number").notNullable().defaultTo("");
    table.string("full_address").notNullable().defaultTo("");
    table.string("latitute").notNullable().defaultTo("");
    table.string("longitude").notNullable().defaultTo("");
  });
}

export async function down({ schema }: Knex): Promise<any> {
  await schema.dropTable("company");
}
