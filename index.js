//Mongoose is an API Require to interact with our MongoDB Data Base.
//Mongoose.Connect returns a Promise


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
    .then(()=>{console.log('Connected to db')})
    .catch(err=>console.log('Error Connecting'));

const courseSchema  = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type :Date,default:Date.now()},
    isPublished:Boolean
});
//mongoose.model Gives back a Classs

const Course  = mongoose.model('Course',courseSchema);
const course = new Course({
    name:"Python",
    author: "Vidit Shah",
    tags:['Scripting Languages','Trending'],
    isPublished: true
});