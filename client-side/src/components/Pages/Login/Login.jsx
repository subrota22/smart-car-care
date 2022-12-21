import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import login from "../../../assets/images/login/login.svg" ;
import {BsFacebook , BsGithub} from "react-icons/bs" ;
import {FcGoogle} from "react-icons/fc" ;
import { useState } from 'react';
import { AuthContext } from '../../../UserContext/UserContext';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';
import authToken from '../../authToken/authToken';
const Login = () => {
const [inputFeildUser , setinputFeildUser] = useState({}) ;
const {loginUser ,  loginWithGoogle , loginWithFacebook , loginWithGithub  } = React.useContext(AuthContext) ;
const navigate = useNavigate() ;
//location check
const location = useLocation() ;
const from = location?.state?.from?.pathname || '/' ;
//get google provider to login
const googleProvider = new GoogleAuthProvider() ;
//get facebook provider to login
const facebookProvider = new FacebookAuthProvider() ;
//get github provider to login
const githubProvider = new GithubAuthProvider() ;
//jwt token recive from server 

const handleGoogleLogin = () => {
loginWithGoogle(googleProvider)
.then((result) => {
Swal.fire({
icon:"success" ,
title: "You are login successfully with google " ,
timer:3000 , 
})  
authToken(result.user.email) ; 
navigate(from , {replace:true}) ;
})
.catch((error) => {
Swal.fire({
icon:"success" ,
title: error.message ,
timer:3000 , 
})      
})
}

//facebook login

const handleFacebookLogin = () => {
    loginWithFacebook(facebookProvider)
    .then((result) => {
    Swal.fire({
    icon:"success" ,
    title: "You are login successfully with facebook " ,
    timer:3000 , 
    })  
    authToken(result.user.email) ; 
    navigate(from , {replace:true}) ;
    })
    .catch((error) => {
    Swal.fire({
    icon:"success" ,
    title: error.message ,
    timer:3000 , 
    })      
    })
}

//github login

const handleGithubLogin = () => {
    loginWithGithub(githubProvider)
    .then((result) => {
    Swal.fire({
    icon:"success" ,
    title: "You are login successfully with Github " ,
    timer:3000 , 
    })  
    authToken(result.user.email) ; 
    navigate(from , {replace:true}) ;
    })
    .catch((error) => {
    Swal.fire({
    icon:"success" ,
    title: error.message ,
    timer:3000 , 
    })      
    })
}

//log in user 

const handleFormData = (event) => {
event.preventDefault() ;
loginUser(inputFeildUser.email , inputFeildUser.password)
.then((result) => {
Swal.fire({
icon:"success" ,
title:"You are login successfully !!",
timer: 3000 , 
})
event.target.reset() ;
navigate(from , {replace:true}) ;
authToken(result.user.email) ; 
//end
}).catch((error) => {
Swal.fire({
icon:"error" ,
title: error.message ,
timer: 3000 , 
})
})
} 

const handleInputFeild = (event) => {
const feild = event.target.name ;
const value = event.target.value ;
const newinputFeildUser = {...inputFeildUser} ;
newinputFeildUser[feild] = value ; // { email:'something@gmail.com' , ....} 
setinputFeildUser(newinputFeildUser) ;
}
return (
<>
<div className="hero min-h-screen bg-base-200 rounded mt-8 py-4">
<div className="hero-content flex-col lg:flex-row justify-between">
<div className="text-center lg:text-left mr-20">
<img src={login} alt="login" className='h-96'/>
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form className="card-body" onSubmit={handleFormData}>
<p className="text-5xl font-bold">Login now!</p>
<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="text" onChange={handleInputFeild} name='email' placeholder="Enter your email" className="input input-bordered" />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input type="password"    onChange={handleInputFeild}  name='password' placeholder="Enter your password" className="input input-bordered" />
</div>
<div className="form-control mt-6">
<button className="btn btn-success">Login</button>
</div>
<div className='my-5'>
<p className='text-2xl font-semibold'>Or sign in with </p>
<div className="flex justify-evenly mt-5">
<p className='font-semibold text-2xl text-blue-600 hover:cursor-pointer'
onClick={handleFacebookLogin}>  <BsFacebook> </BsFacebook>  </p>
<p className='font-semibold text-2xl text-gray-600 hover:cursor-pointer'
onClick={handleGoogleLogin}><FcGoogle> </FcGoogle></p> 
<p><BsGithub className='font-semibold text-2xl text-sky-600 hover:cursor-pointer'
onClick={handleGithubLogin}>  </BsGithub></p>
</div>
</div>
<label className="label">
<p className="label-text-alt  link link-hover text-md font-semibold">
New to car smart car service ? 
<NavLink to="/register" className="text-rose-500"> Register  now  </NavLink>
</p>
</label>
<label className="label flex text-md font-semibold">
<span className="label-text-alt link link-hover"> Reset your password ? 
<NavLink to="/reset-password" className="label-text-alt link text-rose-500 link-hover">
Forgot password?</NavLink>
</span>
</label>
</form>
</div>
</div>
</div> 
</>
);
};

export default Login;