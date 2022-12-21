import React from 'react';
import app from '../firebase.config/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged,
    sendPasswordResetEmail , signInWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth" ;
import { useEffect } from 'react';
import { useState } from 'react';
export const AuthContext = React.createContext() ;
const auth = getAuth(app) ; //globaly use auth 
const UserContext = ({children}) => {
const [user , setUser] = useState({}) ;
const [loading , setLoading] = useState(true) ;
const creatUser = (email , password) => {
//create user
return createUserWithEmailAndPassword(auth , email , password )
}
//login user
const loginUser = (email , password) => {
return signInWithEmailAndPassword(auth , email , password ) ;
}
//google log in 
const loginWithGoogle = (googleProvider) => {
return signInWithPopup(auth , googleProvider) ;
}
//loginWithFacebook

//google log in 
const loginWithFacebook = (facebookProvider) => {
return signInWithPopup(auth , facebookProvider) ;
}

// github log in 
const loginWithGithub = (githubProvider) => {
return signInWithPopup(auth , githubProvider) ;
}
//update name 
const updateUserInfo = (name) => {
return updateProfile(auth.currentUser,  { //getAuthToken  error to missing currentUser
displayName : name , 
})
}
//get user informations
useEffect(() => {
const unsubscribe = onAuthStateChanged(auth , (userInfo) => {
    if(userInfo) {
        setUser (userInfo) ;
        setLoading(false) ;
    }
})
return () => unsubscribe() ;
} , [])
//log out
const logOutUser = () => {
return auth.signOut() ;
}
//reset password 
const resetPassword = (email) => {
return sendPasswordResetEmail( auth  , email ) ;
}

const authInfo = {creatUser , loginUser , loginWithGoogle , loginWithFacebook ,
    resetPassword ,loginWithGithub , updateUserInfo , user  , logOutUser , setUser , loading , setLoading }  ;

return (
<React.Fragment>
<AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
</React.Fragment>
);
};

export default UserContext;