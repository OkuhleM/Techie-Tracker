    CREATE TABLE user_profile (
        UserID int PRIMARY KEY AUTO_INCREMENT,
        Name varchar(50),
        Surname varchar(50),
        Contact varchar(12),
        Email varchar(50),
        PasswordHash varchar (32),
        RegisteredAt DATETIME,
        Intro TINYTEXT
    );

ALTER TABLE user_profile
MODIFY COLUMN UserID AUTO_INCREMENT;

ALTER TABLE user_profile CHANGE UserID UserID INT AUTO_INCREMENT PRIMARY KEY;

ALTER TABLE user_profile
    DROP FOREIGN KEY year_in_review_ibfk_1,
    MODIFY UserID int AUTO_INCREMENT;

 INSERT INTO user_profile(Name, Surname, Email, password, confirmPassword, RegisteredAt, Intro) VALUES ("Montle","Mazibuko","Montle@curro.co.za","S@mkelo@994","S@mkelo@994",Now(),"Hi I am Montle"); 

CREATE TABLE year_in_review (
    YearInReviewID int,
    Highlights varchar(1000),
    Lowlight varchar(1000),
    Needlights varchar(1000),
    CreatedAt DATETIME,
    UpdatedAt DATETIME,
    UserID int,
    PRIMARY KEY (YearInReviewID),
    FOREIGN KEY (UserID) REFERENCES user_profile(UserID)
);

CREATE TABLE Career_Goal (
    Career_GoalID int,
    FirstQuater TEXT,
    SecondQuater TEXT,
    ThirdQuater TEXT,
    FourthQuater TEXT,
    YearWins TEXT,
    UserID int,
    PRIMARY KEY (Career_GoalID),
    FOREIGN KEY (UserID) REFERENCES user_profile(UserID)
);


CREATE TABLE Habit_Tracker (
    Habit_TrackerID int,
    ReadSomething TEXT,
    PractiseCode TEXT,
    WriteSomething TEXT,
    CreatedAt DATETIME,
    UpdatedAt DATETIME,
    UserID int,
    PRIMARY KEY (Habit_TrackerID),
    FOREIGN KEY (UserID) REFERENCES user_profile(UserID)
);

--generate upcoming reminders--  

----------------------------------------------- alter table/ change column name ---------------------------------------------------------------------------
ALTER TABLE user_profile RENAME COLUMN PasswordHash TO password;

----------------------------------- add a column in a specific position --------------------------------------------------------------
ALTER TABLE user_profile ADD COLUMN confirmPassword VARCHAR(32) AFTER password;

------------------------------------- drop a colum on mysql  --------------------------------------------------------------------------
ALTER TABLE `user_profile` DROP COLUMN `Contact`;

ALTER TABLE user_profile MODIFY RegisteredAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE user_profile
MODIFY COLUMN RegiseredAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
 RegDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP

GRANT ALL PRIVILEGES ON techie_user.* TO 'Lindo'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'test'@'%' WITH GRANT OPTION |

show GRANTS FOR Lindo;
-------------------------------------------------------------------------------------------------------------------------------------

create database `user_storage`;