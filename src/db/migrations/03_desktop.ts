import { Knex } from "knex";

export async function up({ schema }: Knex): Promise<any> {
  await schema.createTable("desktop", (table) => {
    table.increments("id").unsigned().primary();
    table.string("platform").notNullable();
    table.string("type").notNullable();
    table.string("os").notNullable();
    table.string("ip").notNullable();
    table
      .integer("company_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("company");
  });
}

export async function down({ schema }: Knex): Promise<any> {
  await schema.dropTable("desktop");
}
