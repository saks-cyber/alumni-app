import React, { Component } from 'react'
import {MenuItems} from './menu-item'
import { Link, useParams } from 'react-router-dom';
import {Button} from '../Button'
import './Navbar.css'
import myIcon from'./icon.svg'
class Navbar extends Component {
 state={clicked:false}
 handleClick=()=>{
this.setState({clicked:!this.state.clicked})

 }

 render() {
  return (
   <nav className="NavbarItems">
    <h1 className="navbar-logo">ALUMG</h1><img className="icon" src={myIcon} alt=""/>
<div className="menu-icon" onClick={this.handleClick}>
 <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>



</div>
<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
 {MenuItems.map((item,index)=>{
  return(<Link to={item.url}><li key={index}>
<a className={item.cName} >
{item.title}
</a>
 </li></Link>)

 })}
</ul>
<Link to='/Login'><Button>Login</Button></Link>
   </nav>
  )
 }
}

export default Navbar
