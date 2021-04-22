import React, { useState ,useRef,useEffect } from 'react'
import axios from 'axios';
import {useAuth} from '../../contexts/AuthContext'
import './Add_Data.css'
import { Link, useHistory } from "react-router-dom"
const Add_Data = () => {
  const {currentUser}= useAuth()
let url="http://localhost:5000/api/user/"   //api url
  const year = useRef()                      //useState hooks
  const course = useRef()
  const currloc = useRef()
  const working = useRef()
  const position = useRef()
  const fb = useRef()
  const insta = useRef()
  const twt = useRef()
    const [loading, setLoading] = useState(false)

      const history = useHistory()

  const name = useRef()
  
 async function handleSubmit(e){            //Function to handle submit
   e.preventDefault();
   setLoading(true)
   const data = { name:name.current.value,email:currentUser.email,year:year.current.value,course:course.current.value,currloc:currloc.current.value,work:working.current.value,position:position.current.value,fb:fb.current.value,insta:insta.current.value,twt:twt.current.value};     //data to post
   console.log(data);
     axios.post(url, data)
        .then(response =>{console.log("success")
        history.push("/home")});
    
        }
 return (
  <div>
   <form onSubmit={handleSubmit}>
    <div className="six">
    <label htmlFor="name"  style={{ color: 'white',fontSize:'larger' }}>Name</label>
<input type="text" id='name' name='name' ref={name} required/>
    <label htmlFor="course"  style={{ color: 'white',fontSize:'larger' }}>Course</label>
<select id="course" name="course" ref={course} required>
    <option value="B.Tech">B.Tech</option>
    <option value="M.Tech">M.Tech</option>
    <option value="PhD">PhD</option>
  </select>
<label htmlFor="year"  style={{ color: 'white',fontSize:'larger' }}>Year Joined</label>
<input type="text" name="year" id="year" ref={year} required/>
<label htmlFor="location"  style={{ color: 'white',fontSize:'larger' }}>Current Location</label>
<input type="text" name="location" id='curr' ref={currloc} required/>
<label htmlFor="work"  style={{ color: 'white',fontSize:'larger' }}>Working At</label>
<input type="text" name="work" id='workk' ref={working} required/>
<label htmlFor="pos"  style={{ color: 'white',fontSize:'larger' }}>Working As</label>
<input type="text" name="pos" id='workkas' ref={position} />
<label htmlFor="fb"  style={{ color: 'white',fontSize:'larger' }}>Facebook Username @</label>

<input type="text" name="fb" id='fb' ref={fb} />
<label htmlFor="insta"  style={{ color: 'white',fontSize:'larger' }}>Instagram Username @</label>
<input type="text" name="insta" id='insta' ref={insta} />
<label htmlFor="twt"  style={{ color: 'white',fontSize:'larger' }}>Twitter Username @</label>
@
<input type="text" name="twt" id='twt' ref={twt} />
</div>
  <button disabled={loading} type="submit"  className='glow-on-hover'>Submit</button>
   </form>
  </div>
 )
}

export default Add_Data
