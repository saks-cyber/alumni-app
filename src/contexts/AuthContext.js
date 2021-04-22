import React,{ useContext,useState,useEffect} from 'react'
import 'firebase/auth'
import { auth } from '../config/fbconfig'
const AuthContext = React.createContext()

export function useAuth()
{
 return useContext(AuthContext)
}

export function AuthProvider({children})
{
const [currentUser,setcurrentUser] = useState()
const [loading,setLoading] = useState(true)

 function signup(email,password){
  auth.createUserWithEmailAndPassword(email,password)
 
}
 function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }
  function logout() {
    return auth.signOut()
  }
useEffect(() => {
 const unsubscribe = auth.onAuthStateChanged(user=>{
  setLoading(false)
 setcurrentUser(user)
})
 return unsubscribe
}, [])

 const value = {
  currentUser,
  signup,
  login,
  logout
 }
 return(
  <AuthContext.Provider value = {value}>
   {!loading && children}
  </AuthContext.Provider>
 )
}

