import React, { useState ,useRef,useEffect } from 'react'
import axios from 'axios';
import './Edit_Profile.css'
import {useAuth} from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"

const Edit_Profile = () => {
  const { currentUser } = useAuth()
  const currloc = useRef()
  const working = useRef()
  const position = useRef()
  const fb = useRef()
  const insta = useRef()
  const twt = useRef()
  const [person, setPerson] = useState("")
        const history = useHistory()


  let url = 'http://localhost:5000/api/user/edit/'+currentUser.email //api url
  async function handleSubmit(e){     //function to handle submit
   e.preventDefault();
  
   const data = {currloc:currloc.current.value,work:working.current.value,position:position.current.value,fb:fb.current.value,insta:insta.current.value,twt:twt.current.value };
   console.log(data);
     axios.put(url, data)
        .then(response =>{console.log("success")
        history.push("/profile")});
    
        }
        const urll = "http://localhost:5000/api/get/"+currentUser.email
   async function datas(){
   axios.get(urll)
      .then(res => {
         setPerson(res.data);
        console.log(person);       
      })
      
     }
     useEffect(() => {
    datas();
    
},[]);

//component to edit the user details
 return (
  <div>
     <form onSubmit={handleSubmit}>
    <div className="six">
<label htmlFor="location" style={{ color: 'white',fontSize:'larger' }}>Current Location</label>
<input type="text" name="location" id="currloc" ref={currloc} value={person.currloc} 
onChange={(e) => setPerson(e.target.value)}/>
<label htmlFor="work" style={{ color: 'white',fontSize:'larger' }}>Working At</label>
<input type="text" name="work" id="work" ref={working} value={person.working} 
onChange={(e) => setPerson(e.target.value)}/>
<label htmlFor="pos"  style={{ color: 'white',fontSize:'larger' }}>Working As</label>
<input type="text" name="pos" id='workkas' ref={position} value={person.position} 
onChange={(e) => setPerson(e.target.value)}/>
<label htmlFor="fb"  style={{ color: 'white',fontSize:'larger' }}>Facebook Username @</label>

<input type="text" name="fb" id='fb' ref={fb} value={person.fb} 
onChange={(e) => setPerson(e.target.value)} />
<label htmlFor="insta"  style={{ color: 'white',fontSize:'larger' }}>Instagram Username @</label>
<input type="text" name="insta" id='insta' ref={insta} value={person.insta} 
onChange={(e) => setPerson(e.target.value)} />
<label htmlFor="twt"  style={{ color: 'white',fontSize:'larger' }}>Twitter Username @</label>
@
<input type="text" name="twt" id='twt' ref={twt} value={person.twt} 
onChange={(e) => setPerson(e.target.value)} />
</div>
  <button  type="submit" className='glow-on-hover'>Submit</button>
   </form>
      <Link to='/profile'><button id='btn-home'>My Profile</button></Link>
  </div>
 )
}

export default Edit_Profile
