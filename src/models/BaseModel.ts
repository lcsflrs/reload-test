import { Model, snakeCaseMappers } from "objection";

export default class BaseModel extends Model {
  static modelPaths = [__dirname];

  static get columnNameMappers() {
    return snakeCaseMappers();
  }
}
