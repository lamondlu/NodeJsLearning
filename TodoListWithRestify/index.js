var restify = require("restify");
var controllers = require("./controllers");


var server = restify.createServer();

controllers.init(server);

server.use(restify.plugins.jsonBodyParser({ mapParams: true }));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.fullResponse());

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});