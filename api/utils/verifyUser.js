import jwt from 'jsonwebtoken';
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        // Return an error response if token is missing
        console.log(req.cookies)
        console.log(token)
        return next(errorHandler(403, 'Access token is missing.'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            // If token verification fails, return an error response
            return next(errorHandler(403, 'Token is not valid.'));
        }

        // Attach the decoded user information to the request object
        req.user = user;
        next();
    });
};
