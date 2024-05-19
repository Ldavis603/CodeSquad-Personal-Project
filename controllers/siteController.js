const register = async (request, response, next) => {
    const { username, password } = request.body;
    if (error) {
        return next(error);
    }
    const newUser = new User({
        username: username,
        password: password,
    });
    try {
        await newUser.save()
        response.status(201).json({
            success: { message: "New user is created" },
            data: { username },
            statusCode: 201,
        });
    } catch (error) {
        response.status(500).json({
            error: { message: "Internal server error" },
            statusCode: 500,
        });
    }
}

const login = async (request, response, next) => {
    response.status(200).json({
        success: { message: "User logged in." },
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