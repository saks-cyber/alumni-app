import React, { useState ,useRef,useEffect } from 'react'
import axios from 'axios';
import './search.css'
import User_Nav from './../User_Nav/User_Nav'
import { HashRouter, Link } from 'react-router-dom';

const Search = () => {
const name = useRef()
  const year = useRef()
    const [error, setError] = useState("")
    const [data, setData] = useState('')
    

let result;
async function sch(e){            //function to get the search results from the api
   e.preventDefault();
 let nameS = name.current.value
 nameS=nameS.replace(" ","&")
 
 const url = "http://localhost:5000/api/search/"+nameS+"/year/"+year.current.value
 //api url
 
 axios.get(url)           //axios request
      .then(res => {
        const d =res.data
         setData(d)
         if(res.data==""){setError(true)}
         else{
  setError(false)}
      })

 
      
}
useEffect(() => {
       console.log(data);
     }, [data])


 if(data.length!=0){
   result = (<div className='sresult'>
   {data.map(res=>{
     const urll = '/user/'+res.email
     return(<div>
     <Link to={urll}>{res.name} ({res.course})</Link>
     <hr/>
     </div>)
     
   })}
  </div>)
  
}

//the component creates a search page to search for alumni
 return (
  <div>
    <User_Nav/>
   <form className='form'>
    <div className='one'>
   <input type="text" name='name' id='name' placeholder='Enter name ' ref={name} required/>
   <input type="text" name="year" id="year" placeholder='Enter year'ref={year} required/>
   </div>
   <button className='glow-on-hover' type="submit" style={{marginLeft:"580px"}} onClick={sch}>Search</button>
   </form>
    {error && <h4 id='error'>No result found</h4>}
    {result}
      
  </div>
 )
}

export default Search
