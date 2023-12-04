// const { databaseConnection } = require("../DataBase/Server");
const {checkIfUserExists } = require("../Queries/index")


checkIfUserExists, function(err, result, field){
    if(result.length === 0){
       console.log('result', result)
}else{  
   console.log('err', err)
}
       }

       