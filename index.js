//Mongoose is an API Require to interact with our MongoDB Data Base.
//Mongoose.Connect returns a Promise

const dbdebug = require('debug')('app:dbdebugger');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
    .then(()=>{console.log("Connecting to The Database")});
