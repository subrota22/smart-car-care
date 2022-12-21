import React from 'react';
import Countdown from 'react-countdown';
const CountDown = () => {

localStorage.setItem("count-down-time" , 222296000 )  
const time  = localStorage.getItem("count-down-time") 
const ctime  =  parseInt(time) ;
localStorage.setItem("count-down-time" , ctime   ) ;
    return (
        <div>
    <div className="flex justify-evenly">

   </div>
<div className="text-center">
  <h2 className='text-blue-400 '> Special Discount time remaining : </h2>
<Countdown className='text-2xl text-indigo-600 font-bold text-center my-6'
 date={Date.now() + ctime} /> 
</div>
        </div>
    );
};

export default CountDown;