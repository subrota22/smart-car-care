import React from 'react';
import { useState } from 'react';
const AddProduct = () => {
const [orders , setOrders] = useState({}) ;
console.log(orders);
//
const handleSubmitForm = (event) => {
event.preventDefault() ;
fetch(`https://smart-car-eight.vercel.app/prducts` , {
method:"POST" ,
headers: {
'content-type' : 'application/json'
},
body: JSON.stringify(orders) 
})
.then(res => res.json())
.then(data => {
if(data.insertedId) {
alert("Congrasulation your new product added successfully ")
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
<h2 className='text-2xl font-bold text-center my-5 '> Add new product  </h2>
<img src="https://i.ibb.co/m0fHLmY/carp.jpg" alt="products" className='w-full h-80'  />
<form  className='w-full bg-gray-400  my-7 p-10 rounded-sm' onSubmit={handleSubmitForm}>

<input type="url" placeholder="Enter photo url" onChange={handleInputFeild} name='productImageUrl' className="input input-bordered input-secondary w-96 max-w-xs mr-2  m my-2 " required/>
<input type="text" placeholder="Enter product title"
onChange={handleInputFeild}  name='productTitle' className="input input-bordered input-secondary w-96 max-w-xs mr-2  m  my-2" required/>
<input type="text" placeholder="Your product price"
onChange={handleInputFeild}  name='productPrice' className="input input-bordered input-secondary w-96 max-w-xs  mr-2  m my-2" required />

<input type="date" placeholder="Your product publish data"
onChange={handleInputFeild}  name='productPublishDate' className="input input-bordered input-secondary w-96 max-w-xs  mr-2  m my-2" required/>

<div>
<button className="btn btn-primary  max-w-screen-xl    my-3"> Add Product  </button>
</div>
</form>
</div>
);
};

export default AddProduct;