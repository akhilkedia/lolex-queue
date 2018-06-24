// let lolex = require('./fast-lolex.js');
let lolex = require('lolex');
const clock = lolex.createClock(0, 100000000);

let numServices = 100; // 100 services, each running once a second

const ONE_SECOND = 1000;
const FINAL_TIME = 3 * 60 * 60 * ONE_SECOND; // lets simulate 3 hours
let counter = 0;

function startService() {
    while (numServices > 0) {
        clock.setTimeout(sampleService, ONE_SECOND / numServices); // Run each service once a second
        numServices--;
    }
}

function sampleService() {
    counter ++;
    if (clock.now < FINAL_TIME) {
        clock.setTimeout(sampleService, ONE_SECOND);
    }
}

startService();
clock.runAll();
console.log('All Done!', counter);
