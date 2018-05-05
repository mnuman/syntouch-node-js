// Using this construct, we use the environment variable PORT or the fallback 3000
const LISTEN_PORT = process.env.PORT || 3000;
const MORGAN_FORMAT = process.env.LOGFORMAT || "dev";

const MONGO_URI = "mongodb://localhost:27017";
const MAX_RESULTS = 10;

const express = require("express");
const bodyParser = require('body-parser');
const logger = require("morgan");
const app = express();
const MongoClient = require("mongodb").MongoClient;

var beerCollection = null;

// set up the logger to see the requests coming in, see: https://github.com/expressjs/morgan
app.use(logger(MORGAN_FORMAT));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// this is the main program loop, created by letting express listen whenever a MONGO connection has been established
MongoClient.connect(MONGO_URI, (err, database) => {
  if (err) {
    console.log("Error connecting");
    throw err;
  }
  var beerDB = database.db('BeerDB');
  // pushing collection reference into GLOBAL namespace - somewhat dirty but allows for the routes to be separated.

  beerCollection = beerDB.collection('beers');
  app.listen(LISTEN_PORT);
  console.log('Connection established, listening started on port: ' + LISTEN_PORT);
});

function empty(data) {
  if (typeof data === 'number' || typeof data === 'boolean') {
    return false;
  }
  if (typeof data === 'undefined' || data === null) {
    return true;
  }
  if (typeof data.length !== 'undefined') {
    return data.length === 0;
  }
  var count = 0;
  for (var i in data) {
    if (data.hasOwnProperty(i)) {
      count++;
    }
  }

  return count === 0;
}

/*
 *   1. first lithmus test: accepting requests
 *   make sure they OMIT res.send and see what happens with the client!
 */
app.get('/', (req, res) => {
  console.log("Hello world");
  // needed for terminating the connection!
  res.send(200);
});
