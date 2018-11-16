const Joi = require('joi');
const express = require('express');
const router = express.Router();
const

const data =[
    {id:1,genre:'Action',code:'Red'},
    {id:2,genre:'Fiction',code:'Blue'}
    ];

// Defining Schema for Validation of the Input from the Request Body.
function verify(request_body) {
    const schema ={
        genre:Joi.string().min(4).required(),
        code:Joi.string().min(3).required()
    };

    const result  = Joi.validate(request_body,schema);
    return result;
};
router.get('/',(req,res)=>{
    res.send("")
})


