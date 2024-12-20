import React, { useEffect,useState } from 'react'
import { AppContext } from './App_Context'
import axios from 'axios'

function App_State(props) {
  const url="http://localhost:3000/api";

  const [token, setToken] = useState("");
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchRecipe=async()=>{

      const api=await axios.get(`${url}/`,
        {
          header:{
            "Content-Type":"application/json",

          },
          withCredentials:true
        }
      )
      console.log(api.data.recipe)
      setRecipe(api.data.recipe)
  }
  fetchRecipe();
} , [])







  
  useEffect(() => {
  //  login('Suryanshji@gmail.com',"12345")
  }, [])
  
const register = async (name,gmail,password)=>{
  const api=await axios.post(`${url}/register`,{


    name,gmail,password

  },{
    headers:{
      "Content-Type":"application/json"
    },
    withCredentials:true
  })

  return api

}
  const login =async (gmail,password)=>{
    const api=await axios.post(`${url}/login`,{


      gmail,password

    },{
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true
    })
    setToken(api.data.token)
    // console.log("login data", api)
    return api
  }

  const addRecipe=async (title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgurl)=>{
    const api=await axios.post(`${url}/add`,{

      title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgurl
    },{
      headers:{
        "Content-Type":"application/json",
        Auth:token
      },
      withCredentials:true
    })
    return api
  }
  return (
    <AppContext.Provider value={{login,register,addRecipe,recipe}}> {props.children}  </AppContext.Provider>
  )
}

export default App_State