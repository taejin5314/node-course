const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();

console.log(msg);

const chalkMsg = chalk.blue.inverse.bold('Success!')
console.log(chalkMsg);

console.log(process.argv)


// const add = require('./utils.js');
// const sum = add(4, -2);
// console.log(sum);