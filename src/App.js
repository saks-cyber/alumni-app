import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import './App.css';
import Home from './components/homepage/home'
import ADD from './components/Add_Data/Add_Data'
import PrivateRoute from "./components/PrivateRoute"
import Profile from "./components/profile/profile"
import Result from './components/search_results/Result'
import SignUp from './components/Signup/signup'
import Search from './components/search/search'
import EDIT from './components/Edit_Profile/Edit_Profile'
import image from './image.jpeg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
 function FullBackground (props) {
  return (
    <div className="bg-dim full-bg-size" style={{backgroundImage: `url(${props.image})`}}>
      
    </div>
  )
}


function App() {
  
  return (
    <AuthProvider>
    <Router>
      <Switch>
         <Route exact path='/'><Navbar/><FullBackground image={image}/></Route>
         <Route exact path='/login'><Navbar/><Login/></Route>
         <Route exact path='/profile'><Profile/></Route>
         <Route exact path='/search'><Search/></Route>
         <Route exact path='/add'><ADD/></Route>
         <Route exact path="/user/:email" component={Result} />
         <Route exact path='/edit'><EDIT/></Route>
         <Route exact path='/signup'><Navbar/><SignUp/></Route>
         <PrivateRoute exact path="/home" component={Home} />
             
  </Switch>
</Router>
 </AuthProvider>
  );
}

export default App;
