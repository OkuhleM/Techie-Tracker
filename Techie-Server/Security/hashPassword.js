const bcrypt = require("bcrypt")
const saltWounds = 10
const Password = "Lindokuhle@22"

// bcrypt.genSalt(saltWounds).then(salt => {
//     console.log('salt', salt)
//     return bcrypt.hash(Password,salt)
// }).then(hash => {
//     console.log('Hash: ', hash)
//   })
//   .catch(err => console.error(err.message))

bcrypt
  .hash(Password, saltWounds)
  .then(hash => {
    console.log('Hash ', hash)
  })
  .catch(err => console.error(err.message))