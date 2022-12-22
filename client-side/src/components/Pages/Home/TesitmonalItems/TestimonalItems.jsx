import React from 'react';
import { AiTwotoneStar} from "react-icons/ai" ;
import {BsArrowRight , BsArrowLeft} from "react-icons/bs" ;
const TestimonalItems = ({testimonalSlide}) => {
const {id , leftImage , rightImage , prev , next } = testimonalSlide ;
return (
// first give an id  name seconde mention it in the a href with prev and next 
<div id={`testimonalSlide${id}`} className="carousel-item relative w-full">
<div className="flex flex-col h-auto sm:flex-col md:flex-row justify-center m-5">
{/* left arrow */}
<a href= {`#testimonalSlide${prev}`}  className="btn btn-success invisible sm:invisible md:visible mt-36 mr-5 font-bold text-xl text-white w-20"><BsArrowLeft></BsArrowLeft></a> 
<div className="card w-80 sm:w-1/2  bg-primary  mt-4 mr-4 sm:h-96 md:h-80 lg:72   text-primary-content">
<div className="card-body">

<div className="flex flex-col sm:flex-col  md:flex-row justify-evenly">
<div className="avatar">
<div className="w-12  rounded-full">
<img src={rightImage} alt='first-user' />
</div>
</div>

<div className='text-md font-semibold'>
<p>Awlad Hossain</p>
<p> Businessman </p>
</div>
<div>
<img src="https://i.ibb.co/wWfrb9Z/qu-removebg-preview.png" 
className='h-14 w-14' alt="queties"/>
</div>
</div>
<p className='text-md font-semibold text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
<div className='text-yellow-400 font-bold text-xl flex'>
<AiTwotoneStar> </AiTwotoneStar>
<AiTwotoneStar> </AiTwotoneStar>
<AiTwotoneStar> </AiTwotoneStar>
<AiTwotoneStar> </AiTwotoneStar>
<AiTwotoneStar> </AiTwotoneStar>
</div>
</div>
</div>

{/* second card  */}

<div className="card bg-primary w-80  sm:w-1/2  sm:h-96 md:h-80 lg:72   mt-4 mr-4 text-primary-content">
<div className="card-body">

<div className="flex flex-col sm:flex-col  md:flex-row justify-evenly">
<div className="avatar">
<div className="w-12  rounded-full">
<img src={leftImage} alt='second-user' />
</div>
</div>

<div className='text-md font-semibold'>
<p>Bijoy Hossain</p>
<p> Businessman </p>
</div>
<div>
<img src="https://i.ibb.co/wWfrb9Z/qu-removebg-preview.png" 
className='h-14 w-14' alt="queties"/>
</div>
</div>
<p className='text-md font-semibold text-text-white '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
<div className='text-yellow-400 font-bold text-xl  flex'>
<AiTwotoneStar> </AiTwotoneStar>
<AiTwotoneStar> </AiTwotoneStar>
<AiTwotoneStar> </AiTwotoneStar>
<AiTwotoneStar> </AiTwotoneStar>
<AiTwotoneStar> </AiTwotoneStar>
</div>
</div>
</div>
<a href= {`#testimonalSlide${next}`}  className="btn btn-success invisible sm:invisible md:visible w-20 mt-36 font-bold text-xl text-white ">
<BsArrowRight></BsArrowRight>
</a>
{/* right arrow  */}

<div className="mx-auto hidden md:visible">
<a href= {`#testimonalSlide${next}`}  className="btn btn-success  visible sm:visible md:invisible w-20 mt-36 font-bold text-xl text-white ">
<BsArrowRight></BsArrowRight>
</a>
<a href= {`#testimonalSlide${prev}`}  className="btn btn-success  visible sm:visible md:invisible w-20 mt-36 font-bold text-xl text-white ">
<BsArrowLeft></BsArrowLeft>
</a>
</div>
</div>
</div> 

);
};

export default TestimonalItems;