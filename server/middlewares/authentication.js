const{User} = require('../models/index')
const{convertToken} = require('../helpers/jwt')


const authentication =async (req, res, next) => {
  const{access_token} = req.headers
    try {
      
     // console.log("Ini access token", access_token, 'line 9 authentication')
  
      const payload = convertToken(access_token) 
      //console.log(payload, " INI PAYLOAD DARI TOKEN")
      const user = await User.findByPk(payload.id)//cari apakah sudah ada di database
        if(!user) {//bila tidak ada, 
            throw{
                name : "INVALID_USER"
            }
        }

        req.loginUser = {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        }
        //console.log(req.loginUser, " INI LOGIN USER 'line 26 authentication'")


      next() 
    } catch(err) {
      next(err)
      //console.log(err)

      
    }
    
    

  }

module.exports = {authentication}