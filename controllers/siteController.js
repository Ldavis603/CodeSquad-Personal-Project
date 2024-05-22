const bcrypt = require("bcrypt")

const User = require('../models/userModel')

const register = async (req, res, next) => {
    const { username, password } = request.body;

    bcrypt.hash(password, 10, async (error, hashedPassword) => {
        if (error) {
            return next(error)
        }
   
    const newUser = new User({
        username: username,
        password: hashedPassword,
        googleId: ""
    });

    await newUser.save()

        request.login(newUser, (err) => {
            response.status(201).json({
                success: {message: "New user is created"},
                data: {username},
                statusCode: 201,
            });
    })
})
    
    }
      
const login = async (request, response, next) => {
    console.log(request.user);
    response.status(200).json({
        success: { message: "User logged in." },
        data: {username: request.user.username},
        statusCode: 200,
    });
}

const logout = async (request, response, next) => {
    request.logout((error) => {
        if (error) {
            response.json({
                error: { message: "Something went wrong when logging out" },
                statusCode: 400,
            });
         };
        response.json("Successfully logged out");
    });
};

module.exports = { register, login, logout };