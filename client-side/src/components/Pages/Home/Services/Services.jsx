import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from "sweetalert2" ;
const Services = () => {
const [services , setServices] = useState([]) ;
const [isAsc , setIsAsc] = useState(true) ;
const [search , setSearch ] = useState('') ;
// console.log(search);
const searchRef = useRef() ;
useEffect(() => {
fetch(`http://localhost:3028/services?order=${isAsc ? 'asc' : 'desc'}&search=${search}`) 
.then(res => res.json())
.then(data => setServices(data)) ;
} ,  [isAsc , search])
const handleSearchFeild = () => {
const searchText = searchRef.current.value ;
if(searchText===""){
Swal.fire({
icon:"error" , 
title: "Please insert some valid text to search service" ,
timer:4000 
})
return ;
}
setSearch(searchText) ;
}

    return (
      <div>
<div className="text-center">
  {/* use ! sign to to toggle order  */}
<button className="btn btn-primary mx-10" onClick={() => setIsAsc(!isAsc)}>
  {isAsc ? "accending order " : "deccending order"}
</button>
<input type="text" placeholder="Search by service name like Electrical System" ref={searchRef}
className="input input-bordered input-success w-96   my-5" name='search'  required/>
<button className="btn btn-primary mx-4" onClick={handleSearchFeild}>Search</button>
</div>
<div className="hero py-5 bg-base-80">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <p className="text-lg text-orange-600 font-bold">Service</p>
      <p className="py-2 font-semibold">Engine oil that's improved, evolved & innovated longer than anyone else. Choose Valvoline. We're not just the first engine oil. We're the only ones to be innovating for 150 years. Car Oils & Lubricants. Synthetic motor oil. Motor oil and fluids. Car servicing. Best engine oil for bikes.</p>
    </div>
  </div>
</div> 
{
  services.length === 0 &&
  <div className="text-center text-info font-bold text-2xl"> Search some service !! </div>
}
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
{
  services.map(service => 
    <div key={service._id} className="card w-70 bg-base-100 shadow-xl">
    <figure><img src={service.serviceImageUrl} alt="services" className='h-52' /></figure>
    <div className="card-body">
      <h2 className="card-title">{service.serviceTitle} </h2>
      <p className='font-semibold text-orange-500'>Price : ${service.servicePrice}</p>
      <p className='font-semibold text-orange-500'>Publish date : {service.servicePublishDate ? service.servicePublishDate : "dd/mm/yy"}</p>
   <NavLink to={`/checkout/${service._id}`}>
   <div className="card-actions justify-end">
        <button className="btn btn-primary border-none">Order Now</button>
      </div>
   </NavLink>
    </div>
  </div>  

  )
}
</div>

<div className="flex justify-center my-10">
<button className="btn btn-info text-orange-400  m-auto justify-center">More Services</button>
</div>

</div>
    );
};

export default Services;