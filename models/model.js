const mongoose=require('mongoose');
const busSchema=new mongoose.Schema({
    busname:String,
    regno:String,
    img:String,
    stops:[{type:String}]
});
const Bus=mongoose.model('Bus',busSchema);
module.exports=Bus;