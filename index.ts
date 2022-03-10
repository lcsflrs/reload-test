import { init } from "./src/server";
import { bindModels } from "./src/utils/objection";
(async () => {
  try {
    bindModels();
    init();
  } catch (err) {
    console.error("Error in index.ts:\n", err);
  }
})();
