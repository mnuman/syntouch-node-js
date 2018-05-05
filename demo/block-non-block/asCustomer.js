var async = require('./lib/doAsyncStuff');

function p(data) {
    console.log(JSON.stringify(data));
}

// retrieve two customers from DB and show 
async.doAsyncStuff('Janssen & Tilanus', p);
async.doAsyncStuff('Schmidt Zeevis', p);

console.log('Today is ' + new Date());