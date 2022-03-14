import { Knex } from "knex";

require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const connection = {
  host: "db",
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
};

const defaults: Knex.Config = {
  client: "mysql",
  connection,
  migrations: {
    directory: "./src/db/migrations",
  },
  seeds: {
    directory: "./src/db/seeds",
  },
  useNullAsDefault: true,
  debug: false,
  // ...knexSnakeCaseMappers(),
};

export const development = {
  ...defaults,
};
