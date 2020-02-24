const fs = require('fs');
const readline = require('readline');
const mongoose = require('mongoose');
const connect = require('./db');
const Voter= require('./schema');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});

connect();

const voters=[];
file.on('line', function(line) {
  const columns = line.split(',');
  voters.push(
    new Voter ({
    firstName: columns[0],
    last_n: columns[1],
    zipcode: columns[2],
    history: columns[3]})
  );
});

file.on('close', function(){
  mongoose.connection.dropDatabase()
    .then(()=> Promise.all(voters.map(v=>v.save())))
    .then(() => mongoose.connection.close())
    .then(()) => console.log("File Is Ready"))
    .catch(error => console.error(error.stack));
});
