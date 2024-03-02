export const check =(req , res) =>
{
    res.json({
        message : "api is working"
    });
}

//now, we can import the test function in api/routes/user.route.js and use it
// as a controller for the api/users/ route . 