var sync = require('./lib/doSyncStuff');

function p(data) {
    console.log(JSON.stringify(data));
}

// retrieve two customers from DB and show
p(sync.doSyncStuff('Brouwerij Het Uiltje'));
p(sync.doSyncStuff('Raboboerenleenbank'));

console.log('Today is ' + new Date());