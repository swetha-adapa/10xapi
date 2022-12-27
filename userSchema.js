const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
     
    class:String,
    studentcount:Number
    
});

const userModal = mongoose.model("user", userSchema);

module.exports = userModal
