const restify = require("restify");

const createServer = () => {
  const server = restify.createServer({
    name: "reload-server",
    ignoreTrailingSlash: true,
  });

  server.use(restify.plugins.bodyParser());

  return server;
};

export const init = () => {
  const server = createServer();

  require("./routes").routes(server);

  server.listen(5000, () => {
    console.log("%s listening at %s", server.name, server.url);
  });
};
