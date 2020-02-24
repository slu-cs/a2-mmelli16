const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});
const mongoose = require('mongoose');
const connect = require('./db');
const registeredVoter= require('./schema');

connect();
