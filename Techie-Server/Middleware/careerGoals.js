const path = require("path");
require("dotenv").config({ dpath: path.resolve(__dirname, "../env") });

const { saveUserProfile, 
    checkEmail, 
    checkPassword,
    saveGoals 
} = require("../Queries/index");


const careerGoals = (app) => {

        app.post('/careergoal', async (req,res) => {
    
        const {
          CareerGoalID, FirstQuater,SecondQuater,ThirdQuater,FourthQuater, YearWins
        } = req.body
    
       
          try {
            const userCareerGoals = {
                FirstQuater,
                SecondQuater,
                ThirdQuater,
                FourthQuater,
                YearWins
            };
      
                
            const data = await saveGoals(userCareerGoals);
            return res.send({data}).status(200);
            }
    
    
    catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
    }
    )
    
    
    }
    
    module.exports = { careerGoals }