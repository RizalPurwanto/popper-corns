const { User } = require("../models/index")
const { comparePassword } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")

async function register(req, res, next) {
    const { username, email, password, phoneNumber, address } = req.body
    try {
        const role = 'admin'
        //console.log( username, email, password, role, phoneNumber, address, "INI INPUT BODY REGISTER")
        const newUser = await User.create({ username, email, password, role, phoneNumber, address })
        //console.log(newUser)
        res.status(201).json({ message: `User with username ${username} as admin succesfully created` })
    } catch (err) {
        //console.log(err)
        next(err)
    }
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            let errors = []

            if (!email) {
                errors.push("Email required")
            }
            if (!password) {
                errors.push("Password required")
            }
            throw ({
                name: "LOGIN_DATA_REQUIRED",
                message: errors
            })

        }
        //console.log(email, password, "INI EMAIL PASSWORD DARI AUTHCONTROLLER")
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        //console.log(user, "INI USER FOUND LOGIN")
        if (user) {
            const isPasswordValid = comparePassword(password, user.password)
            //console.log(isPasswordValid)
            if (isPasswordValid) {
                const payload = { id: user.id, email: user.email, }

                const token = generateToken(payload)
                //console.log(token, "INI TOKEN")
                res.status(200).json({
                    message: "Login Successful",
                    access_token: token,
                    id: user.id,
                    username: user.username,
                    role: user.role,
                    email: user.email

                })
            } else {
                throw ({
                    code: 401,
                    name: "UNAUTHORIZED",
                    message: "Invalid email or password"
                })
            }
        } else {
            throw ({
                code: 401,
                name: "UNAUTHORIZED",
                message: "Invalid email or password"
            })
        }
    } catch (err) {
        // console.log(err)
        next(err)
    }
}
//


module.exports = {
    login,
    register,


}