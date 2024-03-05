import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => 
{
    const {username,email,password} = (req.body);
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User ({username, email, password:hashedPassword});
    try 
    {
        await newUser.save();
        res.status(201).json({message:"user created successfully"});
    } 
    catch (error) 
    {
        next(error);
    }
    
};

export const signin = async(req,res,next) => {
    const {email, password } = req.body;

    try {
        const validUser = await User.findOne({email}); //compare both the emails  
        if(!validUser) return next(errorHandler(404, "User not found"));  // give the error if the email is not there
        const validPassword = bcryptjs.compareSync(password,validUser.password); //compare the passwords
        if(!validPassword) return next(401,'wrong credentials !'); // if password is wrong

        //add a token to the cookie of the browser
        const token = jwt.sign({id :validUser._id},process.env.JWT_SECRET);
        const{ password:hashedPassword, ...rest} = validUser._doc;
        res.cookie('access_token',token,{httpOnly : true}).status(200).json(rest)

    } catch (error) {
        next(error);
    }
}