import React from 'react';
import wrench from "../../../../assets/icons/Wrench.svg" ;
import group from "../../../../assets/icons/group.svg" ;
import deliveryt from "../../../../assets/icons/deliveryt.svg" ;
import check from "../../../../assets/icons/check.svg" ;
import person from "../../../../assets/icons/person.svg" ;
const CoreFeture = () => {
return (
<div className='mt-12 mb-0'>
<div className="text-center">
<h2 className='text-xxl text-orange-600 font-semibold'> Core Features  </h2>
<h2 className='text-3xl font-semibold'>Why Choose Us</h2>
<p className='font-semibold'> the majority have suffered alteration in some form, by injected humour, or randomised <br />  words which don't look even slightly believable. </p>
</div>
<div className="flex flex-col sm:flex-col md:flex-row m-2  justify-around  my-4 h-1/2 py-3 font-semibold">
<div  className='bg-gray-200  px-5  p-3 mr-4 text-center rounded-md 
hover:shadow-2xl hover:scale-105 duration-1000'>
<img src={group} alt="group" className='mx-auto align-text-top'/>
<p>Expert Team</p>
</div>

<div className='bg-orange-400 p-3  mr-4 text-center rounded-md hover:shadow-2xl hover:scale-105 duration-1000 '>
<img src="https://i.ibb.co/gmfCFSJ/td.webp" className='h-20 w-20 mx-auto rounded-xl' alt=""/>
<p className='text-white'> Timely Delivery </p>
</div>

<div  className='bg-gray-200  px-5  p-3 mr-4 text-center rounded-md hover:shadow-2xl hover:scale-105 duration-1000'>
<img src={person} alt="person"  className='mx-auto align-text-top'/>
<p>24/7 Support</p>
</div>

<div  className='bg-gray-200   p-3 mr-4 text-center rounded-md hover:shadow-2xl hover:scale-105 duration-1000'>
<img src={wrench} alt="wrench" className='mx-auto align-text-top' />
<p>Best Equipment</p>
</div>
<div  className='bg-gray-200 px-5  p-3 mr-4 text-center rounded-md hover:shadow-2xl hover:scale-105 duration-1000'>
<img src={check} alt="check-guranty" className='mx-auto align-text-top'/>
<p>100% Guranty</p>
</div>

<div  className='bg-gray-200   p-3 mr-4 text-center rounded-md hover:shadow-2xl hover:scale-105 duration-1000'>
<img src={deliveryt} alt="deliveryt" className='mx-auto align-text-top'/>
<p>Timely Delivery</p>
</div>


</div>

</div>
);
};

export default CoreFeture;