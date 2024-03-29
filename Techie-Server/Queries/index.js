const { databaseConnection } = require("../DataBase/Server");

const createQuery = async (statement, parameter) => {
  const connection = databaseConnection
    try{
const response =  connection.query(statement, parameter);
console.log('reponse.values', response.values)
return response.values;
    }catch(error){
      console.log('error', error)
return error    }
};



const saveUserProfile = async (values) => {
    const { Name, Surname, Username, Email, password, confirmPassword,Intro,RegisteredAt } = values;

    let statement = "INSERT INTO user_profile (Name, Surname, Username, Email, password, confirmPassword, Intro, RegisteredAt) VALUES (?, ?, ?, ?, ?, ?,?, Now())";

     let parameters = [Name, Surname, Username, Email, password, confirmPassword, Intro,RegisteredAt];
     return await createQuery(statement, parameters);

}

const saveGoals = async (values) => {
const {FirstQuater,SecondQuater,ThirdQuater,FourthQuater, YearWins} = values;

let statement = "INSERT INTO career_goal (FirstQuater,SecondQuater,ThirdQuater,FourthQuater, YearWins) VALUES (?,?,?,?,?)" 
let parameters = [FirstQuater,SecondQuater,ThirdQuater,FourthQuater, YearWins];

return await createQuery(statement, parameters);
}

const SaveYearInReviewData = async (data) => {
  const { Highlights, Lowlight, Needlights, CreatedAt, UpdatedAt, UserId} = data

  let statement = "INSERT INTO year_in_review(Highlights, Lowlight, Needlights, CreatedAt, UpdatedAt, UserId) VALUES (?,?,?,NOW(),NOW(),?"
  let parameter = [Highlights, Lowlight, Needlights, CreatedAt, UpdatedAt, UserId]

  return await createQuery(statement, parameter)
}

const saveSkillsData = async (data) => {
  const {Skill, Catergory, CourseLink, TrainingStatus, Comments, CreatedAt, UpdatedAt, UserId} = data
  let statement  = "INSERT INTO skill_tracker(Skill, Catergory, CourseLink, TrainingStatus, Comments, CreatedAt, UpdatedAt, UserId) VALUES (?,?,?,?,?,NOW(),NOW(),?)"
  let parameters = [Skill, Catergory, CourseLink, TrainingStatus, Comments, CreatedAt, UpdatedAt, UserId]
   return await createQuery(statement,parameters)
}

const saveHabitTrackerData = async (data) => {
  const {ReadSomething, PractiseCode, WriteSomething, CreatedAt, Updated, UserId} = data
  const statement = "INSERT INTO habit_tracker (ReadSomething, PractiseCode, WriteSomething, CreatedAt, Updated, UserId) VALUES (?,?,?,NOW(),NOW(),?"
  const parameters = [ReadSomething, PractiseCode, WriteSomething, CreatedAt, Updated, UserId];

  return await createQuery(statement,parameters)
}

const checkEmail = async (Email) => {
    let statement = "SELECT Email FROM user_profile WHERE Email =?;";
    let parameters = [Email];
    return await createQuery(statement, parameters);
  };

  const checkPassword = async (password) => {
    let statement = "SELECT * FROM user_profile WHERE password =?;";
    let parameters = [password];
    console.log('password', password)
    return await createQuery(statement, parameters);
  };

  const checkIfPassword = async (confirmPassword) => {
    let statement = "SELECT * FROM user_profile WHERE confirmPassword =?;";
    let parameters = [confirmPassword];
    console.log('password', confirmPassword)
    return await createQuery(statement, parameters);
  };


  const checkIfUserExists = async (Username) => {
    let statement = "SELECT Username FROM user_profile WHERE Username = ?;";
    let parameters = [Username];
    console.log('Username', Username)

    return await createQuery(statement, parameters)
  }
  const getAllUsers = async () => {
    let statement = "SELECT * FROM user_profile;";
    return await createQuery(statement);
  };


  
 

module.exports = {saveUserProfile, checkEmail, checkPassword,checkIfPassword, 
                  saveGoals,SaveYearInReviewData, saveSkillsData, saveHabitTrackerData,
                checkIfUserExists, getAllUsers}
