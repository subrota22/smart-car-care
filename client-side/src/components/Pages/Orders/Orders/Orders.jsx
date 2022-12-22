import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../UserContext/UserContext';
import ClipLoader from "react-spinners/ClipLoader" ;
import PageLoader from '../../../Share/PageLoader/PageLoader';
const Orders = () => {
const {user , logOutUser }  = React.useContext(AuthContext) ;
const [ordersInfo , setOrdersInfo] = useState([]) ;
const {email } = user;
const navigate = useNavigate() ;
//https://smart-car-eight.vercel.app/
const [loadPage , setLoadPage] = useState(true) ;
useEffect(() => {
if(!email) return ;
fetch(`https://smart-car-subrota22.vercel.app/allOrders?email=${email}` , {
headers:{
authorization: `Bearer ${localStorage.getItem("smart-car-care")}` , 
}
})
.then(res => {

if(res.status === 401 || res.status === 403 ) {
navigate("/login") ;
return logOutUser();
}
return res.json() ;
//use return to return data from function mind it 
})
.then(data => {
setOrdersInfo(data) ;
setLoadPage(false) ;
} )
.catch((error) => console.log(error))
} , [  email  , logOutUser , navigate]);
const handleApproveMethod = (id) => {
fetch(`https://smart-car-eight.vercel.app/orders/${id}` , {
method:"PATCH" ,
headers:{
"content-type" : "application/json" 
} ,
body:JSON.stringify({status:"Approved"}) 
})
.then((res) => res.json())
.then((data) => {
if(data.modifiedCount > 0 ){
const reaminingData = ordersInfo.filter(order => order._id !== id ) ;
const approving = ordersInfo.find(order => order._id === id) ;
approving.status = "Approved" ; 
const newOrders = [approving , ...reaminingData] ;
setOrdersInfo(newOrders) ;
alert("approved")
}
})
}
//delete data

const deleteSingleData = (id) => {
const confirmUser = window.confirm("Are you want to delet this data ? ") ;
if(confirmUser){
fetch(`https://smart-car-eight.vercel.app/orders/${id}` , {
method : "DELETE" , 
})
.then(res => res.json())
.then(data => {
if(data.deletedCount) {
const reaminingData = ordersInfo.filter(order => order._id !== id ) ;
setOrdersInfo(reaminingData) ;
}
}).catch(error => console.log(error))
} else{
window.alert("Your data is safe now !!")
}
};

if(loadPage){
return <PageLoader></PageLoader>
}

return (
<div className='mt-32'>
{
ordersInfo?.length === 0 && 
<>
<div className="text-center my-5">
<h2 className='text-red-400 my-6'> No orders found here give some order </h2>
<NavLink to="/" className="btn btn-primary"> Order now </NavLink>
</div>
</>
}
<div className="overflow-x-auto">
<table className="table table-zebra w-full text-blue-600">
       
<thead>
<tr>
<th>Serial</th>
<th> Name </th> 
<th>Price</th>
<th>Phone</th>
<th>Image</th>
<th>Orders message </th>
<th>Order </th>
<th> Status </th>
<th>Delete</th>
</tr>
</thead>
<tbody>
{
ordersInfo.map((orderInfo , serial) => 
<tr key={orderInfo._id }>
<td> {serial + 1 } </td>
<td>{orderInfo.firstName + " " + orderInfo.lastName}</td>
<th>${orderInfo.productPrice ? orderInfo.productPrice : orderInfo.servicePrice } </th>
<td>{orderInfo.phoneNumber}</td>
<td> <img src={
(  orderInfo.productImageUrl ? orderInfo.productImageUrl : orderInfo.serviceImageUrl
) ?
(
orderInfo.productImageUrl ? orderInfo.productImageUrl : orderInfo.serviceImageUrl
) : 
"https://i.ibb.co/8gt4XfJ/imgnotfound.png"
} alt="product" className='h-14 w-14 rounded-full'/> </td>
<td> {orderInfo.orderMessage} </td>
<td>{(orderInfo.productTitle ? orderInfo.productTitle : orderInfo.serviceTitle) }</td>
<td onClick={() => handleApproveMethod(orderInfo._id)}  className="hover:cursor-pointer">
{orderInfo.status === "pending" ? <ClipLoader color='blue' className='w-14 h-12'></ClipLoader> : <img src='https://i.ibb.co/s10kRPm/tik-removebg-preview.png' alt='tik' className='w-14'/>}  </td>
<td onClick={()=> deleteSingleData(orderInfo._id)} className="hover:cursor-pointer text-red-600"><BsTrashFill 
className='text-2xl font-semibold'></BsTrashFill></td>
</tr>)
}
</tbody>
</table>
</div>

</div>

);
};


export default Orders;