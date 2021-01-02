const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)
// console.log(data.title);

const sampleBuffer = fs.readFileSync('1-json.json');
const sampleData = JSON.parse(sampleBuffer);
sampleData.name = 'Taejin';
sampleData.age = '26'
const overWriteJSON = JSON.stringify(sampleData);
fs.writeFileSync('1-json.json', overWriteJSON);