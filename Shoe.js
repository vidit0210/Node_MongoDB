const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoe').then(()=>{console.log('Connected to Shoe DB')})
    .catch(()=>{console.log("Cannot Connect to the DataBase")});
/*
* We Will Define our Schema
* Price-number
* Company-String
* Size-Number
*
* */
const shoeSchema = mongoose.Schema({
    price:Number,
    company:String,
    size:Number
});

const Shoe = mongoose.model("Shoe",shoeSchema);
async function createShoe() {
    const shoe = new Shoe({
        price:500,
        company:"Puma",
        size: 9
    });

    const saveShoe =  await shoe.save();
    console.log(saveShoe);

}

//createShoe();
async function getShoe() {
 //const result = await Shoe.find({company:"Adidas"}).sort({price:1});
    //const result = await Shoe.find({price:{$gte:200,$lte:300}}).sort({price:1});
    const result = await Shoe.find( {price:{ $in:[200,300]}});
 console.log(result);
}
getShoe();