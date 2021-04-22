import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import './User_Nav.css'
import {useAuth} from '../../contexts/AuthContext'
import myIcon from'./icon.svg'

const User_Nav = () => {
  const { logout } = useAuth()
     const history = useHistory()

  async function handleLogout() {  //function to handle logout
    try {
      await logout()
      history.push("/login")
    } catch {
    }
  }
  //this component is for navbar
 return (
  <div>
   <div className='nav-1'>
         <div><h1 style={{display:'inline'}} className="navbar-logo">ALUMG</h1><img className="icon" src={myIcon} alt=""/></div>
     <div className='item-name'>
       <ul>
         <li><Link to='/home'>Home</Link></li>
  <li><Link to='/profile'>My Profile</Link></li>
     <li><Link to='/search'>Search</Link></li>
    <li style={{marginRight:'50px'}}><Link  onClick={handleLogout}>Logout</Link></li>
  </ul>
     </div>
  
</div>
   
  </div>
 )
}

export default User_Nav
