import React, { useState, useEffect } from 'react';
import {useAuth} from '../../contexts/AuthContext'
import axios from 'axios';
import User_Nav from './../User_Nav/User_Nav'
import './profile.css'
import './profile.scss'
import image from './../../../src/profile-icon.png'
import { Link } from 'react-router-dom';
const Profile = () => {
   const { currentUser } = useAuth()
    const [person, setPerson] = useState("")   //state to save details of person
   
   async function data(){
      const url = "https://alumni-management.herokuapp.com/api/get/"+currentUser.email  //api url
   axios.get(url)
      .then(res => {
         setPerson(res.data);
               console.log(person);
      })
     }
     useEffect(() => {
    data();
},[]);
let fb='https://www.facebook.com/'+person.fb     //social media links
let insta='https://www.instagram.com/'+person.insta
let twt='https://www.twitter.com/'+person.twt
if(person.fb == undefined)
{
 fb='https://www.facebook.com'
}
if(person.insta == undefined)
{
 insta = 'https://www.instagram.com'
}
 if(person.twt == undefined)
{
 twt='https://www.twitter.com'
}
//below component displays the user details
 return (
    <div>
       {/* Navbar Component */}
     <User_Nav/>           
  <div className='zero'>
     <div className='second'>
        <img src={image} width="190px" height="180px" style={{marginLeft:'0px' ,
        marginBottom:'10px' ,borderRadius:'50%'}} alt=""/>
    
        <h4 style={{display:'block'}}>{person.name}</h4>
    <hr />
   <h4 style={{display:'block',marginLeft:'5px'}}>{person.position}</h4>
   <hr />
  <div class="flex-center">
  <a href={twt} target="_blank"> <i style={{fontSize:'40px'}} class="fa fa-twitter fa-4x icon-3d"></i></a>
  <a href={fb} target="_blank"><i style={{fontSize:'40px'}} class="fa fa-facebook fa-4x icon-3d"></i></a>
  <a href={insta} target="_blank"> <i style={{fontSize:'40px'}} class="fa fa-instagram fa-4x icon-3d"></i></a>
</div>
     </div>
   <div className='first'>
    <div>Name <div style={{display:'inline-block',marginLeft:'195px'}}><h4 >{person.name}</h4></div></div>
    <hr />
   <div>Email <div style={{display:'inline-block',marginLeft:'200px'}}><h4 >{person.email}</h4></div></div>
   <hr />

    <div>Course <div style={{display:'inline-block',marginLeft:'190px'}}><h4 >{person.course}</h4></div></div>
    <hr />

    <div>Batch <div style={{display:'inline-block',marginLeft:'200px'}}><h4 >{person.year}</h4></div></div>
   <hr />

    <div>Current Location <div style={{display:'inline-block',marginLeft:'135px'}}><h4 >{person.currloc}</h4></div></div>
   <hr />
 <div>Working At <div style={{display:'inline-block',marginLeft:'167px'}}><h4 >{person.working}</h4></div></div>    
   </div>
 
  </div>
   <Link to='/edit'><button id='btn-home'>Edit Profile</button></Link>
  </div>
 )
}

export default Profile
