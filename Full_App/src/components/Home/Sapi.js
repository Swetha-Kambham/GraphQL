import React, {useState,useEffect} from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
//import {useState} from 'react';
import { gql } from '@apollo/client';
// import {u}


const Sapi=()=>{
  const [state,setState]=useState();
  const client = new ApolloClient({
    //runtime graphQl environment
    uri: "http://localhost:9002/graphql",
    cache: new InMemoryCache()
  });


  const handleClient=()=>{
    

      client
    .query({
      query: gql`
      query{
        getGithubUser(login:"swetha"){
          id
          avatat_url
        }
      }
    `
    })
    .then(result=>{
      const Course=result.data.getGithubUser;
      console.log(Course);
      setState(Course);
    })

  }
   /* const [state,setState]=useState("");
    const handleSubmit=(event)=>{
        
        event.preventDefault();
        const client = new ApolloClient({
            uri: `https://api.github.com/users/${state}`,
            cache: new InMemoryCache()
          });


          client
          .query({
            query: gql`
              query{
                    login
                    id
                    avatar_url
                    }
                `
          })
          .then(result => console.log(result));
    
    }
    
      const handleChange=(e)=>{
        setState(e.target.value);
      }
      
    return (
        
        <div className="Apicall">
            <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    value={state}
                    onChange={handleChange}
                    required
            />
            <button>Add</button>
            </form>
        </div>
    )*/
    return (
        <ApolloProvider client={client}>
            <div className="githubpage">
                My First Apollo Client 
                <button onClick={handleClient}>ClickMe</button>
               {/* {state && <>{state[0].id}-{state[0].node_id}
               <img src={state[1].avatar_url}></img></>} */}
               {/* <img src={sta} */}
               {/* {state && state.map((x)=>{
                 return <>
                   {x.id}-{x.node_id}
                  <img src={x.avatar_url}></img>
      
                 </>
               })} */}
               <div className="githubuser">
                  {state && 
                  <div className="object">
                    {state.id}
                    <img src={state.avatar_url}></img>
                  </div>
                  }
               </div>

            </div>
        </ApolloProvider>
        
    );

}
export default Sapi;