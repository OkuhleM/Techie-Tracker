const { techieUserConnection } = require("../DataBase/Server");

const createQuery = async (statement, parameter) => {
  const connection = techieUserConnection
    try{
const response =  connection.query(statement, parameter);
console.log('reponse.values', response.values)
return response.values;
    }catch(error){
      console.log('error', error)
return error    }
};



const saveUserProfile = async (values) => {
    const { Name, Surname, Email, password, confirmPassword,Intro,RegisteredAt } = values;

    let statement = "INSERT INTO user_profile (Name, Surname, Email, password, confirmPassword, Intro, RegisteredAt) VALUES ($1, $2, $3, $4, $5, $6, Now())";

     let parameters = [Name, Surname, Email, password, confirmPassword, Intro,RegisteredAt];
     return await createQuery(statement, parameters);

}

const checkEmail = async (Email) => {
    let statement = "SELECT * FROM user_profile WHERE Email =$1;";
    let parameters = [Email];
    return await createQuery(statement, parameters);
  };

  const checkPassword = async (password) => {
    let statement = "SELECT * FROM user_profile WHERE password =$1;";
    let parameters = [password];
    console.log('password', password)
    return await createQuery(statement, parameters);
  };

  const checkIfPassword = async (confirmPassword) => {
    let statement = "SELECT * FROM user_profile WHERE confirmPassword =$1;";
    let parameters = [confirmPassword];
    console.log('password', confirmPassword)
    return await createQuery(statement, parameters);
  };

 

module.exports = {saveUserProfile, checkEmail, checkPassword,checkIfPassword}