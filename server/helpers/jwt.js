
const jwt  = require ('jsonwebtoken')
const SECRET_KEY = process.env.MY_KEY

function generateToken(payload) {
  console.log(SECRET_KEY, "INI SECRET KEY")
  return jwt.sign(payload, SECRET_KEY)
}//mengacak payload berdasarkan SECRET_KEY, menjadi JWT Token


function convertToken(token) {
  return jwt.verify(token, SECRET_KEY)
}//mengubah JWT token menjadi payload berdasarkan SECRET_KEY

module.exports= {generateToken, convertToken}