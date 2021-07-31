// Start your es6 scripts here
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
//import cors from 'cors';

const cors=require('cors');
import resolvers from './resolvers';
import schema from './schema';
//const {createProxyMiddleware} =require('http-proxy-middleware');

const app=express();


app.use(cors());




app.get("/",(req,res)=>{
    res.send("My name is Swetha");
})

const root=resolvers;
//graphQl
app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

app.listen(9002,()=>{
    console.log("Running port on 9002");
})