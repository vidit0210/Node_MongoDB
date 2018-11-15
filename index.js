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

async function createCourse() {
    const course = new Course({
        name:"Angular",
        author: "Vidit Shah",
        tags:['Angular','Front End'],
        isPublished: true
    });

//Saving is Aysch operation=It Gives promise
    const result =  await course.save();
    console.log(result);
};

//createCourse();
async function getAllCourses() {

    // const result =  await Course.find();

    //Filtering the Query
   // const result =  await Course.find({name:"Angular"});

    //More Complex Filtering {} :1 for ascending -1 for descending
    const result =  await Course.find({author:"Vidit Shah"}).sort({name:1});

    console.log(result)
}
getAllCourses();