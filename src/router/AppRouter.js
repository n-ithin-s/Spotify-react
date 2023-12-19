import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect,useState } from "react";


import Home from "../pages/Home";
import Song from "../pages/Song";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Search from "../pages/Search";



function AppRouter(){
    
  const CLIENT_ID = "8e487f2f479443c58a5b31399efee1dc"
  const REDIRECT_URI = "http://localhost:3000/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

 
 const url=`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
 
  const [token, setToken] = useState('')

useEffect(()=>{
  const hash = window.location.hash

  let token = window.localStorage.getItem("token")

  // getToken()


  if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    setToken(token)
  console.log(token)
  
 
  //
 
},[]);

    return(
        <Router>
            <div>
            
                
                <Routes>
                    <Route path="/" element={!token? <Login url={url}/>:<Home token={token} setToken={setToken}/>}/>
                    <Route path="/Song" element={<Song/>}/>  
                    <Route path="/Signup" element={<Signup/>}/>
                    <Route path="/Signup" element={<Signup/>}/>
                    <Route path="/Search" element={<Search token={token}/>}/>
                    
                </Routes>
              
            </div>
        </Router>
    )
}
export default AppRouter;