import Knex from "knex";
import { Model } from "objection";
import { development } from "../../knexfile";

export const knex = Knex(development);

export const bindModels = () => {
  // @ts-ignore
  Model.knex(knex);
};
