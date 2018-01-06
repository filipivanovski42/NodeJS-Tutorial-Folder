console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require ('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Andrew', 1,'Andrew', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

// var addition = notes.add(5,2);
// console.log(addition);

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}, you are ${notes.age}.`);
