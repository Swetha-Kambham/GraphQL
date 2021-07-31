import {nanoid} from "nanoid";
import axios from "axios";
//it is used to 
//graphQl tools are the way that we persist the data in mongoDB/PostGrel
//Here we are string them inside a varible


class Users{
    constructor(Uid,{launguages,Name,age,behaviours})
    {
        this.Uid=Uid;
        this.launguages=launguages;
        this.Name=Name;
        this.age=age;
        this.behaviours=behaviours;
    }
}
//course object.
class Course{
    constructor(id,{
        courseName, category,price,launguage,email, stack,teachingAssists
    })
    {
        this.id=id;
        this.courseName=courseName;
        this.category=category;
        this.price=price;
        this.launguage=launguage;
        this.email=email;
        this.stack=stack;
        this.teachingAssists=teachingAssists;
    }
}
//key value pairs
//key=>id of the course and value is the all data that we are sending
const courseHolder={};

//methods in schema are name them exactly same here in resolvers function
const resolvers = {
    getCourse:({id})=>{
        return new Course(id,courseHolder[id])
    },
    SetCourse:({input})=>{
        let id=nanoid()
        courseHolder[id]=input
        return new Course(id,input)

    },
    getUsers:({Uid})=>{
        return new Course(Uid,courseHolder[Uid]);
    },
    SetUsers:({input})=>{
        let id=nanoid()
        courseHolder[id]=input
        return new Course(id,input)
    },
    getGithubUsers:async()=>{
        // if(name){
        //     const result=await axios.get(`https://api.github.com/users/${name}`);
        //     return [id: x.date.]
        // }
        const response=await axios.get(`https://api.github.com/users`);
        console.log(response);
        return response.data.map((x)=>{
            return{
                id: x.id,
                avatar_url: x.avatar_url,
                node_id:x.node_id
            }
        });
        
    },
    getGithubUser:async({login})=>{
        if(login)
        {
            const response=await axios.get(`https://api.github.com/users/${login}`);
            console.log(response);
            return{
                id:response.data.id,
                avatar_url:response.data.avatar_url
            }

            
        }

    }
    
}

export default resolvers;