import React from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';
import login from "../../../assets/images/login/login.svg" ;
import {BsFacebook , BsGithub} from "react-icons/bs" ;
import {FcGoogle} from "react-icons/fc" ;
import { useState } from 'react';
import { AuthContext } from '../../../UserContext/UserContext';
import Swal  from "sweetalert2" ;
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import authToken from '../../authToken/authToken';
const Register = () => {
const {creatUser , loginWithGoogle , loginWithFacebook , loginWithGithub , updateUserInfo} = React.useContext(AuthContext) ;
const [inputFeildUser , setinputFeildUser] = useState({}) ;
const navigate = useNavigate() ;
//get google provider to login
const googleProvider = new GoogleAuthProvider() ;
//get facebook provider to login
const facebookProvider = new FacebookAuthProvider() ;
//get github provider to login
const githubProvider = new GithubAuthProvider() ;

const handleGoogleLogin = () => {
loginWithGoogle(googleProvider)
.then((result) => {
Swal.fire({
icon:"success" ,
title: "You are login successfully with google " ,
timer:3000 , 
})  
authToken(result.user.email) ; 
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
    })
    .catch((error) => {
    Swal.fire({
    icon:"success" ,
    title: error.message ,
    timer:3000 , 
    })      
    })
}

//register an new user 
const handleFormData = (event) => {
event.preventDefault() ;
creatUser(inputFeildUser.email , inputFeildUser.password)
.then((result) => {
Swal.fire({
icon:"success" ,
title:"Your are successfully registred" ,
timer : 3000 ,  
})
navigate("/") ; ;
authToken(result.user.email) ; 
//update some partial data of user 
updateUserInfo(inputFeildUser.name)
.then(() => {
    Swal.fire({
        icon:"success" ,
        title:"Your name is updated" ,
        timer : 3000 ,  
        })
        event.target.reset() ;
}).catch((error) => {
    Swal.fire({
        icon:"error" ,
        title: error.message,
        timer : 3000 ,  
        })
})
}).catch(error => {
    Swal.fire({
        icon:"error" ,
        title: error.message,
        timer : 3000 ,  
    })
})
}

const hanleInputInputFeild  = (event) => {
const feild = event.target.name ; //take name property 
const value = event.target.value ; //take value 
const newinputFeildUser = {...inputFeildUser } ;
newinputFeildUser[feild] = value ;
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
<form className="card-body" onSubmit={handleFormData} >
<p className="text-5xl font-bold">Register now!</p>
<div className="form-control">
<label className="label">
<span className="label-text">Name</span>
</label>
<input type="text" name='name' onChange={hanleInputInputFeild} placeholder="Enter your name" className="input input-bordered" />
</div>

<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="text" name='email'   onChange={hanleInputInputFeild}placeholder="Enter your email" className="input input-bordered" />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input type="password" name='password'  onChange={hanleInputInputFeild}placeholder="Enter your password" className="input input-bordered" />
</div>
<div className="form-control mt-6">
<button className="btn btn-success">Register</button>
</div>
<div className='my-5'>
<p className='text-2xl font-semibold'>Or sign up with </p>
<div className="flex justify-evenly mt-5">
<p className='font-semibold text-2xl text-blue-600 hover:cursor-pointer'
 onClick={handleFacebookLogin}> <BsFacebook> </BsFacebook> </p>
<p className='font-semibold text-2xl text-gray-600 hover:cursor-pointer'
 onClick={handleGoogleLogin}><FcGoogle> </FcGoogle></p>
<p><BsGithub className='font-semibold text-2xl text-sky-600 hover:cursor-pointer'
onClick={handleGithubLogin}>  </BsGithub></p>
</div>
</div>
<label className="label">
<p className="label-text-alt link link-hover text-md font-semibold text-xl ">Have an accout ? 
<NavLink to="/login" className="text-rose-500"> Login now  </NavLink>
</p>
</label>

</form>
</div>
</div>
</div> 
</>
);
};

export default Register;