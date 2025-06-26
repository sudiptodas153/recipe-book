import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, ProviderId, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase';


const AuthContextProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [themes, setThemes] = useState(false)
    const [allData, setAllData] = useState([])
    const [data, setData] = useState([])
    const [identifyByEmail, setIdentifyByEmail] = useState([]);
    // console.log(themes)


    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const profileUpdate = userDetails => {

        return updateProfile(auth.currentUser, userDetails)
    }


    const signUser = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);

    }




useEffect(()=>{
    fetch('https://recipe-database-zeta.vercel.app/recipes')
    .then(res => res.json())
    .then(data => setAllData(data))
},[])



useEffect(()=>{
    fetch('https://recipe-database-zeta.vercel.app/recipes')
    .then(res => res.json())
    .then(data => setData(data))
},[])



useEffect(() => {
       
        const filteredItems = data.filter(item => item.userEmail === user?.email);
        
        setIdentifyByEmail(filteredItems);
    }, [data, user?.email])










    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const userInfo = {
        createUser,
        profileUpdate,
        user,
        setUser,
        signUser,
        googleSignIn,
        loading,
        themes,
        setThemes,
        allData,
        identifyByEmail,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthContextProvider;