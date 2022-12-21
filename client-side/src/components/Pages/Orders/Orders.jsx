import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../UserContext/UserContext';
import {GrChapterPrevious , GrChapterNext} from "react-icons/gr" ;
import ClipLoader from "react-spinners/ClipLoader" ;
const Orders = () => {
const {user , logOutUser }  = React.useContext(AuthContext) ;
const [ordersInfo , setOrdersInfo] = useState([]) ;
const [pageSize , setPageSize] = useState(10) ;
const [page , setPage] = useState(1) ;
const [count , setCount] = useState(1) ;
const {email } = user;
const navigate = useNavigate() ;
//https://smart-car-eight.vercel.app/
useEffect(() => {
fetch(`https://smart-car-eight.vercel.app/orders-data?email=${email}&page=${page}&size=${pageSize}` , {
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
setCount(data.count) ;
setOrdersInfo(data.orders)
} )
.catch((error) => console.log(error))
} , [page , pageSize  , email  , logOutUser , navigate]);
const pages = Math.ceil(count / pageSize) ;
//
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
}

return (
<div className='mt-32'>
{
ordersInfo.length === 0 && 
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
<div className="text-center my-10 ">
{
page  > parseInt(pageSize) && <button className="btn btn-success mx-3"  
onClick={() => setPage ( page - 1  ) }>
<GrChapterPrevious></GrChapterPrevious>
</button>
}
{
pages  !== 0 &&

[ ...Array(pages).keys() ].map(pageNumber => 
    <button key={pageNumber}   className={
    page  === pageNumber  ?  `btn btn-primary mx-2 w-14 shadow`
    :`btn btn-success text-white mx-2 w-16 shadow`
    }
    onClick={() => setPage(pageNumber )} 
    >
    {pageNumber + 1 } 
    </button>
    )
}

{
page   <   parseInt(pageSize) && <button className="btn btn-primary text-white mx-3"
onClick={() => setPage( page + 1) }
>
<GrChapterNext></GrChapterNext>
</button>

}

{
ordersInfo.length !== 0 &&   
<select  className='border-none btn btn-primary  py-3 px-2 rounded'
onChange={(e) => setPageSize(e.target.value)}>
<option  value="16">Select page number</option> 
<option value="2">Select 2</option> 
<option value="4">Select 4</option> 
<option value="8">Select 8</option> 
<option value="16">Select 16</option> 
</select>}

</div>
</div>

);
};


export default Orders;