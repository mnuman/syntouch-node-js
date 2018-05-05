const _timeoutMillis = 3000;
var sleeping = require('sleeping');
var doSyncStuff = function( customerName){
  // generate some customer object for demonstration purposes
  let u = { id: Math.floor(Math.random() * 123842) + 1,
            name: customerName,
            openOrderValue: Math.floor(Math.random() * 392842)/100,
            status: Math.floor(Math.random() * 5) + 1 
          };

  // simulate same delay from database as in async case
  sleeping.for(_timeoutMillis);
  return u;
};
module.exports = { doSyncStuff }
