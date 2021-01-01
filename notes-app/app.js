const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();

console.log(msg);

const chalkMsg = chalk.blue.inverse.bold('Error!')
console.log(chalkMsg);


// const add = require('./utils.js');
// const sum = add(4, -2);
// console.log(sum);