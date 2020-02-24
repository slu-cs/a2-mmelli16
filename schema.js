const mongoose= require('mongoose');

const voter= new mongoose.Schema({
  firstName: String,
  lastName: String,
  zipCode: String,
  history:String});

  voter.index({firstname: 1});
  voter.index({lastname: 1});
  voter.index({zipcode: 1});
  voter.index({history: 1});

  module.exports=mongoose.model('voter', voter);
