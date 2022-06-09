import React, { useContext } from 'react'
import style from '../Style/Navbar.module.css'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
const Navbar = () => {
  
   const  navigate = useNavigate();
  const {isAuth,setIsAuth}= useContext(AuthContext);

  const loginPage =()=>{
  if(isAuth){
     
    setIsAuth(null);
   
  }
  navigate("/login")
  console.log("isAuth",isAuth)
 
  }
  
    return (

    <div className={style.navbar}>
       <Link to="/" >Home</Link>
       <Link to="/display">Display</Link>
        <button onClick={()=>loginPage()} >{isAuth? "Logut": "Log In" }</button>
    </div>
  )
}

export default Navbar