 import {buildSchema} from 'graphql';
 

//course is just an object
//getUser(name: String):githubUser  ***implement this swetha
const schema=buildSchema(`
    type Users{
        Uid:ID
        launguages:[String]
        age:Int
        Name:String
        behaviours:behavioursOfHuman
    }
    enum behavioursOfHuman{
        EATING
        WALKING
        SLEEPING
        TALKING
    }

    type Course{
        id:ID
        courseName: String
        category:String
        price:Int
        launguage:String
        email:String
        stack:Stack
        teachingAssists:[TeachingAssist]
    }
    type TeachingAssist{
        firstName:String
        lastname:String
        Experiance:Int

    }
    enum Stack
    {
        WEB
        MOBILE
        OTHER
    }
    type githubUser{
        id:Int
        node_id:String
        avatar_url:String
    }
    type GitUser{
        id:Int
        avatar_url:String
    }
    type Query{
        getCourse(id:ID):Course
        getUsers(Uid:ID):Users
        getGithubUsers:[githubUser]
        getGithubUser(login:String):GitUser
    }
    input UserInput{
        Uid:ID
        launguages:[String]
        age:Int
        Name:String!
        behaviours:behavioursOfHuman
    }
    input CourseInput{
        id:ID
        courseName: String!
        category:String
        price:Int!
        launguage:String
        email:String
        stack:Stack
        teachingAssists:[TeachingAssistInput]
    }
   
    input TeachingAssistInput{
        firstName:String
        lastname:String
        Experiance:Int
    }
    type Mutation{
        SetUsers(input:UserInput):Users
        SetCourse(input:CourseInput):Course
    }
`);
//enum is also like type 
export default schema;