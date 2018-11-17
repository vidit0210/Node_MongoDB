const express = require('express');
const router = express.Router();

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

router.put('/:id',(req,res)=>{

    const result = verify(req.body);
    if(result.error){return res.status(200).send(error.details.message[0])};
    const check = data.find(c=>{c.id==req.params.id});
    if(!check){ return res.send('Item not found')}
    data.genre = res.body.genre;
    data.code=res.body.code;

})
router.post('/',(req,res)=>{
    const result= verify(req.body);
    if(!result){res.status(400).send(error.details[0].message)};
    const add ={
        genre:req.body.genre,
        code:req.body.genre
    };
    data.push(add);
})

router.delete('/:id',(req,res)=>{})



