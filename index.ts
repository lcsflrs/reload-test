import { bindModels } from "./src/utils/objection";

const restify = require("restify");

bindModels();

const server = restify.createServer({
  name: "reload-server",
});

server.get("/hello", (_: unknown, resp: any) => {
  resp.json({ message: "world" });
});

server.listen(5000, () => {
  console.log("%s listening at %s", server.name, server.url);
});
