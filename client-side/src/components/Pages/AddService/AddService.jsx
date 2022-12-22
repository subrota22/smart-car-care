import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import checkOutImage from "../../../assets/images/checkout/checkout.png"
const AddServices = () => {
const [orders , setOrders] = useState({}) ;
const handleSubmitForm = (event) => {
event.preventDefault() ;
fetch(`https://smart-car-eight.vercel.app/services` , {
method:"POST" ,
headers: {
'content-type' : 'application/json'
},
body: JSON.stringify(orders) 
})
.then(res => res.json())
.then(data => {
if(data.insertedId) {
Swal.fire({
icon:"success" ,
title:"Congrasulation your new service added successfully" ,
text:"Go to home page to view your added servic" ,
timer:5000 ,
})
}
event.target.reset() ;
})
.catch((error ) => {
console.log(error);
})
}
//
// 
const handleInputFeild = (event) => {
const feild = event.target.name ;
const value = event.target.value ;
const newOrder = {...orders} ;
newOrder[feild] = value ;
setOrders(newOrder)
}
return (
<div className='mx-auto justify-center'>
<h2 className='text-2xl font-bold text-center my-5 '> Add new service </h2>
<img src={checkOutImage} alt="" srcSet='' />
<form  className='w-full bg-gray-400  my-7 p-10 rounded-sm' onSubmit={handleSubmitForm}>

<input type="url" placeholder="Enter service image  url" onChange={handleInputFeild} name='serviceImageUrl' className="input input-bordered input-secondary w-96 max-w-xs mr-2  m my-2 " required/>
<input type="text" placeholder="Enter service title"
onChange={handleInputFeild}  name='serviceTitle' className="input input-bordered input-secondary w-96 max-w-xs mr-2  m  my-2" />
<input type="number" placeholder="Your service price"
onChange={handleInputFeild}  name='servicePrice' className="input input-bordered input-secondary w-96 max-w-xs  mr-2  m my-2" required/>

<input type="date" placeholder="Your service publish date"
onChange={handleInputFeild}  name='servicePublishDate' className="input input-bordered input-secondary w-96 max-w-xs  mr-2  m my-2" required />

<div>
    <button className="btn btn-primary mx-auto   max-w-screen-lg my-3  block"> Add Services </button>

</div>
</form>
</div>
);
};

export default AddServices;