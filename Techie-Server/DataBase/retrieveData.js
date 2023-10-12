const { techieUserConnection } = require("./Server")



const retrieveData = async () => {
    
    try{
        const response = techieUserConnection.query("SELECT * FROM user_profile");
        console.log(response.rows);
        return response.rows
    }catch (error) {
        console.error(error)
    }
}


  module.exports  = {retrieveData}