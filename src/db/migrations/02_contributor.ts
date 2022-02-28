import { Knex } from "knex";

export async function up({ schema }: Knex): Promise<any> {
  await schema.createTable("contributor", (table) => {
    table.increments("id").unsigned().primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("title").notNullable();
    table.string("job_title").notNullable();
    table.integer("age").notNullable();
    table
      .integer("company_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("company");
  });
}

export async function down({ schema }: Knex): Promise<any> {
  await schema.dropTable("contributor");
}
