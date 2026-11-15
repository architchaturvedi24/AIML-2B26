const fs = require('fs');

// CREATE
fs.writeFileSync('data.txt', 'Hello Node.js');
console.log('File created');

// READ
let data = fs.readFileSync('data.txt', 'utf8');
console.log('File content:', data);

// UPDATE
fs.appendFileSync('data.txt', '\nWelcome to Node.js!');
console.log('File updated');

// DELETE
fs.unlinkSync('data.txt');
console.log('File deleted');