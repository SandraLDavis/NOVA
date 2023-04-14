var mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
  // NEW VERSION OF MONGOOSE ALREADY ASSUMES ALL THE FOLLOWIN 
  // useNewUrlParser , useUnifiedTopology , useFindAndModify , and useCreateIndex are no longer supported options
  // . Mongoose 6 always behaves as if useNewUrlParser , useUnifiedTopology , and useCreateIndex are true , and useFindAndModify is false .
  // useNewUrlParser: true,
  // useCreateIndex: true,
  // useUnifiedTopology: true
  });
//  ////////////////////// TO CHECK WE ARE CONNECTED AND WHERE WE ARE CONNECTED TO /////////////////////////
var db = mongoose.connection;

db.on('connected', function (err) {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});