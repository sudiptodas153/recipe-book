import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, ProviderId, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase';


const AuthContextProvider = ({children}) => {

const provider = new GoogleAuthProvider();

const [user, setUser] = useState(null)

 

    const createUser = (email, pass) =>{
       return createUserWithEmailAndPassword(auth,email,pass);
    }

    const profileUpdate = userDetails =>{
       return updateProfile(auth.currentUser, userDetails)
    }


    const signUser = (email, pass) =>{
       return signInWithEmailAndPassword(auth , email, pass);
    }

    const googleSignIn = () =>{
      return signInWithPopup(auth, provider);

    }







    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
    }) 
    return ()=>{
        unSubscribe();
    }
    },[])


    const userInfo = {
        createUser,
        profileUpdate,
        user,
        setUser,
        signUser,
        googleSignIn,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthContextProvider;