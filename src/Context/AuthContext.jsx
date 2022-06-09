import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const navigate = useNavigate();
     
    const [isAuth, setIsAuth] = useState(false);
    const [loginCred, setLoginCred] = useState({
        email : "",
        password:"",
    });
    const [userInfo, setUserInfo] = useState({
        email : "",
        password:"",
    })
   const handleChange = (e)=>{
     const {name, value} = e.target;
     setUserInfo({
         ...userInfo,
         [name]:value
     })
   }

   useEffect(() => {
    if(isAuth){
        navigate("/");
    }
    
   }, [isAuth])
   
   const login = ()=>{
    fetch("https://reqres.in/api/login",{
        method: 'POST', // or 'PUT'
          headers: {
     'Content-Type': 'application/json',
       },
    body: JSON.stringify(loginCred),
   })
    .then(response => response.json())
   .then(data => {
  console.log('Success:', data.token);
  setIsAuth(data.token)
  
   })
   }
   
        const upDateLoginCred = (e)=>{
            e.preventDefault();
            setLoginCred( {...userInfo}) 
            login();
          
            setUserInfo({
                email : "",
                password:"",
            })
           
            }

    return <AuthContext.Provider value={{handleChange,setIsAuth,isAuth,upDateLoginCred,userInfo}}>{children}</AuthContext.Provider>
}