import React, { useState ,useRef,useEffect } from 'react'
import './signup.css'
import axios from 'axios';
import {useAuth} from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
const Signup = () => {
  const [loading, setLoading] = useState(false) //different useState hooks
  const [check, setCheck] = useState(false)
  const [error, setError] = useState("")
  const [error2, setError2] = useState("")
    const history = useHistory()
    
  const emailRef = useRef()            //useRef hook
   const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  
  const {signup}= useAuth()

  
 async function handleSubmit(e){         ///function called when submit is pressed
   e.preventDefault();
   //condition for non matching passwords
 if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")}
      
    //condition for non-webmail emaild id  
  if(emailRef.current.value.substring(emailRef.current.value.indexOf("@") +1)!='iiitg.ac.in'){
return setError2("Email is not a valid IIITG webmail!")
  }

try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/add")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
    }
    
  
//below component is a signup page with two input fields
 return (
    <div>
       <h3 id='head'>Only students with IIITG webmail can register !</h3>
       {error && <h3 id='head'>{error}</h3>} 
       {error2 && <h3 id='head'>{error2}</h3>} 
   <form onSubmit={handleSubmit}>
     <div className='poss'>
{/* <label htmlFor="name">Name</label>
<input type="text" id='name' name='name' ref={name} required/> */}
<label htmlFor="email" style={{ color: 'white',fontSize:'larger' }} >Email</label>
<input type="text" id='email' name='email' ref={emailRef} required/>
<label htmlFor="pass" style={{ color: 'white',fontSize:'larger' }}>Password</label>
<input type="password" id='pass' name='pass' ref={passwordRef} required/>
<label htmlFor="repass"style={{ color: 'white',fontSize:'larger' }} >Password Confirmation</label>
<input type="password" id='repass' name='repass' ref={passwordConfirmRef} required/>

     </div>
  <button disabled={loading} type="submit" className='glow-on-hover'>Sign Up</button>
   </form>
   {check && <h3 id='head'>{check}</h3>}
  
  </div>
 
 )}

export default Signup
