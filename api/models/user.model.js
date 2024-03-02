import mongoose from "mongoose";

const userSchema = new mongoose.Schema (
{
    username:{
        type:String,
        required:true,
        unique:true,      
    },
    email:{
        type:String,
        required:true,
        unique:true,      
    },
    password:{
        type:String,
        required:true,
        
    }
}, 

{timerstamp:true} //for the creation time and the updation time of the user

);

const User = mongoose.model('User', userSchema);

export default User;
 
