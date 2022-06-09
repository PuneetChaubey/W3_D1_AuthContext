import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import style from '../Style/Login.module.css';
const Login = () => {

    const {upDateLoginCred,handleChange,userInfo} = useContext(AuthContext)
  
  return (
    <div>
        <form className={style.form}  onSubmit={upDateLoginCred} >
        <input type="email" value={userInfo.email} placeholder="Enter Email.." name="email" onChange={handleChange} />
        <input type="password" value={userInfo.password} placeholder="Enter Password.." name="password" onChange={handleChange}/>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default Login