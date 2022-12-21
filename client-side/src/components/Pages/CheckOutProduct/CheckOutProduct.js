import React from 'react';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import checkOutImage from "../../../assets/images/checkout/checkout.png"
import { AuthContext } from '../../../UserContext/UserContext';
const CheckOutProuduct = () => {
const [orders , setOrders] = useState({}) ;
const orderInformations = useLoaderData() ;
const {productImageUrl , productPrice , productTitle } = orderInformations ;
const {user} = React.useContext(AuthContext) ;
const { displayName , email } = user ;
const navigate = useNavigate() ;
//
// if(orders.orderMessage> 20 || orders.orderMessage < 10 ) {
// alert("Please type your message betweeen 10 to 20 character ") ;
// return ;
// }
//pone number check 
if(parseInt(orders.phoneNumber).length < 11) {
    window.alert("Please enter valid phone number ") ;
    return ;
    }
    else if(orders.phoneNumber === ""){
    window.alert("Plase enter your phone number")
    return ;
    } 
    //end phone number check 
//
const moreOrderInfo = {
     email , 
     productImageUrl,
     productPrice , 
     productTitle , 
     status:"pending" , 
     ...orders
    } ;

//
const handleSubmitForm = (event) => {
event.preventDefault() ;

fetch(`https://smart-car-eight.vercel.app/orders` , {
method:"POST" ,
headers: { 
'content-type' : 'application/json'
},
body: JSON.stringify(moreOrderInfo) 
})
.then(res => res.json())
.then(data =>{
if(data.insertedId) {
event.target.reset() ;
window.alert("Congrasulations your order successfully done !! ") ;
navigate('/orders')
}
})
}
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
            <h2 className='text-2xl font-bold text-center my-5 text-green-400'> Check out product page </h2>
            <h2 className='text-2xl font-bold text-center my-5 text-blue-400 '> Hello dear {displayName} are you ready to order ? </h2>
            <img src={checkOutImage} alt="" srcSet='' />
            <form  className='w-full bg-gray-400 text-center  my-7 p-10 rounded-sm' onSubmit={handleSubmitForm}>
                <div className="flex justify-evenly">
                <input type="text" placeholder="First name" onChange={handleInputFeild} name='firstName' className="input input-bordered input-secondary w-96 max-w-xs mr-2  m my-2 " required/>
                <input type="text" placeholder="Last name" onChange={handleInputFeild}  name='lastName' className="input input-bordered input-secondary w-96 max-w-xs mr-2  m  my-2" required/>
                </div>
                <div className="flex justify-evenly">
                <input type="text" placeholder="Your phone" onChange={handleInputFeild}  name='phoneNumber' className="input input-bordered input-secondary w-96 max-w-xs  mr-2  m my-2" min="11" max="11" required/>
                <input type="text" placeholder="Your email" onChange={handleInputFeild}  name='emailAddress' defaultValue={email} readOnly={email ? "readOnly" : undefined} className="input input-bordered input-secondary max-w-xs   w-96   my-2" required/>
                </div>
            <textarea  minLength="10" maxLength="50" rows="5" name='orderMessage'  onChange={handleInputFeild}   className="textareaFeild my-4 px-4 py-4  rounded-md " style={{width:"80%" , border:"2px solid blue"}}
             placeholder="You can give us your home address and some message " required></textarea >
     <button type='submit' className="btn btn-primary my-4 px-4 py-4  rounded-md " style={{width:"80%"}}> Check out product </button>
            </form>
        </div>
    );
};

export default CheckOutProuduct;