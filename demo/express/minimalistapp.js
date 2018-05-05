const express = require("express");
const logger = require("morgan");
const MORGAN_FORMAT = "dev";
const LISTEN_PORT = 3000 || process.env.PORT;
const app = express()
    .use(logger(MORGAN_FORMAT))
    .get("/hello", helloHandler)
    .get("/hello/:name", helloHandler)
    .listen(LISTEN_PORT);
function helloHandler(req, res) {
    res.status(200).send(`Mini hello ${(req.params.name) ? req.params.name : 'world'}!`);
}
