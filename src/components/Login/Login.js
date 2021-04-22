import React, { useState } from 'react'
import './Login.css'
import { Link ,useHistory  } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'

const Login = () => {
    const {login , currentUser}= useAuth()
  
  const [person,setPerson] = useState({email:'', pass:''});
    const [error, setError] = useState("")
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  


  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  }

  async function handleSubmit(e)
  {
      e.preventDefault();

 try {
      setError("")
      setLoading(true) 
      await login(person.email, person.pass)
      //console.log(currentUser.uid);
   history.push("/home")
    } catch {
      setError("Failed to login")
        }
    //setAcc("Account Successfully Created!")
    setLoading(false)
  }
 return (
<div>
  {error && <h3 id='headd'>{error}</h3>}

  <form className='form' onSubmit={handleSubmit}>
    <div className='pos'>
    <label htmlFor="email" style={{ color: 'white',fontSize:'larger' }}>Email</label>
    <input type="text" id='email' name='email' value={person.email} onChange={handleChange}/>
    <label htmlFor="pass" style={{ color: 'white',fontSize:'larger' }}>Password</label>
    <input type="password" id='pass' name='pass' value={person.password} onChange={handleChange}/>
    </div>
    <button disabled={loading} type='submit' className='glow-on-hover'>Login</button>
  </form>
  <Link to='/signup'><button className='glow-on-hover'>Create New Account</button></Link>
</div>)
}

export default Login
