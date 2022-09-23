import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase.js'
import {
    createWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
} from 'firebase/auth'



const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})
    
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }


    return (
    <AuthContext.Provider>
         {children}   
  </AuthContext.Provider>
)
}   

export function UserAuth() {
    return useContext(AuthContext)
}