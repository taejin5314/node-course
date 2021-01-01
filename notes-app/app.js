const fileSystem = require('fs');

// fileSystem.writeFileSync('notes.txt', 'My name is Taejin.')
fileSystem.appendFileSync('notes.txt', '\nWhat is your name?')