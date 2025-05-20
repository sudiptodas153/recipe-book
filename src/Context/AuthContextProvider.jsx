import React from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase';

const AuthContextProvider = ({children}) => {

    const createUser = (email, pass) =>{
       return createUserWithEmailAndPassword(auth,email,pass)
    }

    const profileUpdate = userDetails =>{
        updateProfile(auth.currentUser, userDetails)
    }


    const userInfo = {
        createUser,
        profileUpdate,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthContextProvider;