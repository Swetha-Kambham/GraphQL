import React, {useState/*useEffect*/} from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
//import {useState} from 'react';
import { gql } from '@apollo/client';
import "./DynamicUser.css";

// cont query =gql`
// query($variable:String){
//   getGithubUser(login:$variable){
//   id
//   avatar_url
// }
// `;
const DynamicUser=()=>{
  const [state,setState]=useState({});
  const [name,setName]=useState('');
  const client = new ApolloClient({
    //runtime graphQl environment
    uri: "http://localhost:9002/graphql",
    cache: new InMemoryCache()
  });
/* query{
        getGithubUser($login:String=${name}){
          id
          avatar_url
        }
      }
*/
 
  // client.query({
  //   query: gql`query($login: String){
  //     getGithubUser(login: $login){
  //     id
  //     avatar_url
  //   }`,
  //   variables: {
  //   	login: 'some name'
  //   }
  // });
  const handleClient=(e)=>{
    console.log(name);
    e.preventDefault();
    console.log("we are in handleClient");
   //Here I am passing the dynamic values in the Query String 
    client.query({
      query: gql `query($vname:String){
        getGithubUser(login:$vname){
        id
        avatar_url
      }
    }`,
      variables:{
        vname:name
      }
    })
    .then(result=>{
      console.log(result);
      const userdetails=result.data.getGithubUser;
      console.log(userdetails);
      setState(userdetails);
      
      setName('');
    })

  }

  const handleChange=(e)=>{
      setName(e.target.value);

  }
   
    return (
        <ApolloProvider client={client}>
            <div className="githubpage">
                My First Apollo Client 
                <form onSubmit={handleClient}>
                    <input type="text"
                            onChange={handleChange}
                            value={name} 
                            required/>
                    <button>ClickMe</button>
                </form>
                
               <div className="githubuser">
                  {state && 
                  <div className="object">
                    <p>{state.id}</p>
                    <img src={state.avatar_url}></img>
                  </div>
                  }
               </div>

            </div>
        </ApolloProvider>
        
    );

}
export default DynamicUser;