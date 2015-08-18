// Bring Mongoose into the app 
var mongoose = require( 'mongoose' ); 

// Build the connection string 
var dbURI = 'mongodb://heroku_0wg7zv0m:rsjr5clbacal6lt7b4fnpm67ug@ds035663.mongolab.com:35663/heroku_0wg7zv0m'; 

// Create the database connection 
var db = mongoose.connect(dbURI); 

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

module.exports = db;