const _timeoutMillis = 3000;
var doAsyncStuff = function( customerName, cb){
  // generate some customer object for demonstration purposes
  let u = { id: Math.floor(Math.random() * 123842) + 1,
            name: customerName,
            openOrderValue: Math.floor(Math.random() * 392842)/100,
            status: Math.floor(Math.random() * 5) + 1 
          };

  // simulate DB delay
  setTimeout( () => {cb(u);},_timeoutMillis);
};
module.exports = { doAsyncStuff }
