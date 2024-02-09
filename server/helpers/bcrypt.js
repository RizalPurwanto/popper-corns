const bcrypt = require('bcryptjs')

function hashPassword(plainPassword) {
  const salt = bcrypt.genSaltSync(7)
  return bcrypt.hashSync(plainPassword, salt)
}//mengubah plain password menjadi hashed password sebelum ke database

function comparePassword(plainPassword, hashedPassword) {
  return bcrypt.compareSync(plainPassword, hashedPassword)
}//return dalam bentuk boolean

module.exports = {hashPassword, comparePassword}