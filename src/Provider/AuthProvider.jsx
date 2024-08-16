/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from './../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


 export const AuthContext=createContext(null)
 const AuthProvider=({children})=>{
    const [loading,setLoading]=useState(false)
    const [user,setUser]=useState(null)


    //Providers:
    const googleProvider=new GoogleAuthProvider()

    //Register:
  const registerAccount=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  //update Account:
  const updateUserProfile=(name)=>{
    return updateProfile(auth.currentUser,{
        displayName: name,
    })
  }

  //Login:
  const logIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  //logOut:
  const logOut=async()=>{
    setUser(null)
    setLoading(true)
    await await signOut(auth).then(()=>{})
  }

  //google login:
  const googleLogIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

    //Observer:
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          }
          setLoading(false);
        });
        return () => unSubscribe();
      }, []);


    const allValues={
        loading,
        registerAccount,logIn,googleLogIn,setLoading,updateUserProfile,user,logOut
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
       
    )
 }
 export default AuthProvider;