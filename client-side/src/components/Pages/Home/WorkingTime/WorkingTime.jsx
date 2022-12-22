import React from 'react';

const WorkingTime = () => {
return (

<div className="gap-8 w-full  px-10 py-8 items-center  bg-black rounded-md  text-center 
 flex xs:flex-col sm:flex-col md:flex-row  justify-around">
 <div className="flex justify-around">
<img src="https://i.ibb.co/GT596cb/clock.jpg" alt="clock" className='h-8 w-8 rounded-lg mx-2' />
<div>
<p className='text-md font-semibold  text-white '> We are open monday-friday </p>
<p className='text-2xl font-semibold  text-white '> 7:00 am - 9:00 pm </p>
</div>
 </div>
 <div className="flex justify-around">
 <img src="https://i.ibb.co/F4Wh6xC/phone.jpg" alt="phone" className='h-8 w-8 rounded-lg mx-1' />
<div>
<p className='text-md font-semibold  text-white '> Have a questions </p>
   <p className='text-2xl font-semibold  text-white '> +2546 251 2658 </p>
</div>
 </div>
 <div className="flex justify-around">
<img src="https://i.ibb.co/XxtwhMS/location.jpg" alt="location" className='h-8 w-8 rounded-lg mx-1'  />
<div>
<p className='text-md font-semibold  text-white '> Need a repair? our address </p>
   <p className='text-2xl font-semibold  text-white '> Liza Street, New York </p>
</div>
 </div>

  </div>

    );
};

export default WorkingTime;