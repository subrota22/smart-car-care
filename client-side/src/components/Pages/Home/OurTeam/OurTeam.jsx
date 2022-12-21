import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const OurTeam = () => {
const [teamMembers , setTeamMembers] = useState([]) ;
useEffect(() => {
fetch('team.json') 
.then(res => res.json())
.then(data => setTeamMembers(data)) ;
} ,  [])
    return (
<div>
<div className="hero py-5 bg-base-80">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <p className="text-lg text-orange-600 font-bold">Team</p>
      <p className="text-lg  font-bold">Meet Our Team</p>
      <p className="py-2 font-semibold">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
    </div>
  </div>
</div> 
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
{
  teamMembers.map(teamMember  => 
    <div key={teamMember._id} className="card w-70 bg-base-100 shadow-xl">
    <figure><img src={teamMember.image} alt="services" className='h-52' /></figure>
    <div className="card-body">
      <h2 className="card-title">{teamMember.title} </h2>
      <p className='font-semibold text-orange-500'>{teamMember.description}</p>
    </div>
 <div className="socail-media py-6 text-2xl text-purple-700 font-semibold flex justify-evenly">
 <BsFacebook className='text-blue-400 hover:cursor-pointer hover:scale-150 duration-1000'></BsFacebook>
 <BsTwitter  className='text-blue-600 hover:cursor-pointer hover:scale-150 duration-1000'></BsTwitter>
 <BsLinkedin className='text-blue-800 hover:cursor-pointer hover:scale-150 duration-1000'></BsLinkedin>
 <BsInstagram className='text-orange-400 hover:cursor-pointer hover:scale-150 duration-1000'></BsInstagram>
 </div>
  </div>  
  )
}
</div>
</div>
    );
};

export default OurTeam;