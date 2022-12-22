import React from 'react';
import {HiArrowLeft, HiArrowRight} from "react-icons/hi" ;
const BannerItems = ({slide}) => {
const {id , image , prev , next} = slide ; 

return (
<div  id={`slide${id}`} className="carousel-item relative w-full rounded-lg"
 style={{width:"100%" , height:"683px"}}> 
<div className='carousel-image'>
<img src={image}  alt='banner' className='w-full absolute'/>
</div>
    <div className="absolute  flex-column justify-center top-52 left-32  transform-translate-y-1/2  right-5 bottom-0">
    <h2 className='text-2xl text-white font-semibold my-4'> Affordable Price For Car Servicing</h2>
    <p className='text-xl text-white font-semibold my-3'>
    There are many variations of passages of  available,
    <br />
     but the majority have suffered alteration in some form
    </p>
<div className="my-12">
  <button className="hidden md:visible btn btn-primary  mr-3">Discover More</button>
 <button className="hidden md:visible btn btn-primary">Latest Project</button>
  </div>
</div>


    <div className="absolute flex justify-end  left-5 right-5 bottom-5">
      <a  href={`#slide${prev}`} className="btn btn-primary mr-5">
         <HiArrowLeft/> 
       </a> 
      <a href={`#slide${next}`}  className="btn btn-primary btn-circle"> 
        <HiArrowRight/>
       </a>
    </div>
    </div>   
   );
};

export default BannerItems;