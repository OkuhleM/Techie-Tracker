const {databaseConnection} = require("../DataBase/Server")

const modifyData = async (data,UserID) => {
const {Name,Surname,Email,Intro} = data
try{
    const editUserDetails =  databaseConnection.query("UPDATE user_profile SET Name=?,Surname=?, Email=? WHERE UserID=?",[
        Name,Surname,Email,Intro,UserID
    ]);
    console.log("response:",editUserDetails)

}catch(error){
    console.error(error)
}
}
module.exports={modifyData}