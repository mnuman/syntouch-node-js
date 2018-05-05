const s = "String value";
const n = 3.1415926;
const b = true;
const a = [1,1,2,3,5,8,13,21,34,55];
const fun = function(){
  for (let arg in arguments){
    console.log(arguments[arg]);
  }
};
const o = { what: "I am an object", why: "Because I can", functie: fun};

fun(s,n,b,o,a);
