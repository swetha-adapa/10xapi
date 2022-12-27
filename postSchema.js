const mongoose=require("mongoose");
const postSchema = new mongoose.Schema({
    name:String, 
    classid:Number
    
    
});

const postModal = mongoose.model("post", postSchema);

module.exports = postModal