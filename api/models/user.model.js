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
    },
    profilePicture:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw1OfliAT5d1BGV_JH3RSq5V&ust=1710075577317000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLCNnLKe54QDFQAAAAAdAAAAABAE",
    },
}, 

{timestamps:true} //for the creation time and the updation time of the user

);

const User = mongoose.model('User', userSchema);

export default User;
 
