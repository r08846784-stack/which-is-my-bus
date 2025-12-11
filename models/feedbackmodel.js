const mongoose=require('mongoose');
const feedbackSchema=new mongoose.Schema({
    busname:String,
    regno:String,
   username:String,
   comment:String
});
const Comment=mongoose.model('Comment',feedbackSchema);
module.exports=Comment;