import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const check =(req , res) =>
{
    res.json({
        message : "api is working"
    });
}

//now, we can import the test function in api/routes/user.route.js and use it
// as a controller for the api/users/ route . 

export const updateUser = async(req,res,next) => {

    if (req.user.id !== req.params.id) {

        return next(errorHandler(401,"you can update your account only"));

    }
    try {
        if(req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 12);
        }
        
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username : req.body.username,
                    email:req.body.email,
                    password: req.body.password,
                    profilePicture: req.body.profilePicture,
                }
            },
            {new:true} // important to implement the changes in the mongodb
        );
        const {password, ...rest } = updatedUser._doc; //to remove the password form the doc
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
}


//update user