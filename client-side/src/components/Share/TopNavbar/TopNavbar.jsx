  import React from 'react'; 
  import { useState } from 'react';
  import { useEffect } from 'react';
  import { BsBrightnessHigh } from 'react-icons/bs';
  import {NavLink} from "react-router-dom" ;
  import {MdDarkMode} from "react-icons/md" ;
  import { AuthContext } from '../../../UserContext/UserContext';
  const TopNavbar = () => {
  const [theme , setTheme] = useState("light-theme") ;
  const {logOutUser , user , setUser} = React.useContext(AuthContext) ;
  const logOutUserInformation = () => {
  logOutUser()
  .then(() => {
  window.alert("Your are accout has been log out  !! ") ;
  setUser({}) ;
  })
  .catch((error) => {
  window.alert(error.message) ;
  })
  }
  const menueItem =  <>
  <li className='mr-4'> <NavLink to="/about"> About </NavLink> </li>
  <li> <NavLink to="/contact"> Contact </NavLink> </li>
  </>

  useEffect(() => {
  document.body.className = theme ;
  } , [theme])

  const handleDarkTheme = () => {
  if(theme==="light-theme"){
  setTheme("dark-theme") ;
  }else{
  setTheme("light-theme")
  }
  }
  return (
  <div className="navbar bg-base-100 py-4 ">
  <div className="navbar-start">
  <div className="dropdown">
  <label tabIndex={0} className="btn btn-ghost visible md:invisible lg:invisible">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  <ul tabIndex={0} className="menu menu-compact font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
  {menueItem}
  <li><NavLink to="/add-services">Add services </NavLink></li>
  <li><NavLink to="/add-product"> Add products</NavLink></li>
  <li>
  <NavLink to="/orders" className="btn btn-primary my-2">
  Orders 
  </NavLink>
  </li>

  <li> 
  <button className="btn btn-primary"
  onClick={() => logOutUserInformation()}>Log out</button>

  </li>
  </ul>
  </div>
  <NavLink to="/" className="normal-case text-xl">
  <h2 className='text-xl font-bold text-blue-600 uppercase mx-2'>Smart car care </h2>
  </NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal  font-semibold  p-0">
  <>
  <li>
  <div className="flex-none">
{  
user.email=== "itinfobd24@gmail.com" &&
<ul className="menu menu-horizontal p-0">
  <li tabIndex={0}>
  <NavLink>
  Add your new data 
  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
  </NavLink>
  <ul className="p-2 bg-base-100 mb-6">
  <li><NavLink to="/add-services">Add services </NavLink></li>
  <li><NavLink to="/add-product"> Add products</NavLink></li>
  </ul>
  </li>
  </ul>}
  </div>
  </li>
  <li>
{user.uid &&   <div className="flex-none">
  <ul className="menu menu-horizontal p-0">
  <li tabIndex={0}>
  <NavLink>
  More Link 
  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
  </NavLink>
  <ul className="p-2 bg-base-100">

{ 
 <li>
  <NavLink to="/orders" className="btn btn-primary my-2">
  Orders 
  </NavLink>
  </li>}

  {
  user.uid && <>
  <li> 
  <button className="btn btn-primary"
  onClick={() => logOutUserInformation()}>Log out</button>

  </li>
  </>
  }
  </ul>
  </li>
  </ul>
  </div>}
  </li>
  </>
  </ul>


<ul className='flex justify-evenly'>
{menueItem}

{ !user.uid &&  <>

<li>
<NavLink className="mx-3" to="/register">Register</NavLink>
</li>
<li>
<NavLink to="/login">Login</NavLink>
</li>
</>  }
</ul>

  </div>
  {/* <div className="navbar-end">
  <NavLink to="/" className="btn">Get started</NavLink>
  </div> */}
  <div className="text-3xl ml-3 hover:cursor-pointer">
  {
  theme=== "light-theme" ?<MdDarkMode className='text-black'
  onClick={handleDarkTheme}></MdDarkMode> : 
  <BsBrightnessHigh onClick={handleDarkTheme}
  className='text-orange-400 '></BsBrightnessHigh>
  }

  </div>
  {
  user.uid && <>
  <img src={user.photoURL ? user.photoURL : "https://i.ibb.co/gZ7vNCv/userimage.png"} alt="user" className='h-14 ml-12 w-14 rounded-full'/>
  </>
  }
  </div>
  );
  };

  export default TopNavbar;