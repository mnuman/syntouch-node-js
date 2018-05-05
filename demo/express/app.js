const express = require("express");
const logger = require("morgan");
const app = express();
const MORGAN_FORMAT = "dev";
const LISTEN_PORT = 3000 || process.env.PORT;
function reneFrogger(req,res){
  res.status(200).send(`Just say: hello ${(req.params.name) ? req.params.name : 'world'}!`);
}
// add logging middleware
app.use(logger(MORGAN_FORMAT));
app.get("/hello", reneFrogger);
app.get("/hello/:name", reneFrogger);
app.listen(LISTEN_PORT);