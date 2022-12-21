import React from 'react';
import TestimonalItems from '../TesitmonalItems/TestimonalItems';

const Testimonial = () => {
const testimonalData= [
{
leftImage: "https://i.ibb.co/kgHLHYX/f1.jpg" , 
rightImage:"https://i.ibb.co/6PtcxN6/f2.jpg" , 
prev: 10 ,
id: 7 ,
next:8 , 
}
,
{
leftImage: "https://i.ibb.co/T0GmdbY/f3.jpg" , 
rightImage:"https://i.ibb.co/MkwqN3H/f4.jpg" , 
prev: 7 ,
id: 8 ,
next:9 , 
}
,
{
leftImage: "https://i.ibb.co/gmdcsTd/f5.jpg" , 
rightImage:"https://i.ibb.co/jZXLwb1/f6.jpg" , 
prev: 8 ,
id: 9 ,
next:10 , 
}
,
{
leftImage: "https://i.ibb.co/HFYdTYJ/f7.jpg" , 
rightImage:"https://i.ibb.co/Jyk08Xk/f8.jpg" , 
prev: 9 ,
id: 10 ,
next:7 , 
}
,
]
return (
<>
<div className='-top-22'>
<div className="text-center font-semibold ">
<h2 className='text-xxl text-orange-600 '>Testimonial</h2>
<h2 className='text-3xl py-4' >What Customer Says</h2>
<p className='text-md py-6'>the majority have suffered alteration in some form, by injected humour, or randomised <br />
words which don't look even slightly believable. </p>
</div>

</div>

<div className="carousel w-full">
{
testimonalData.map(testimonalSlide => <TestimonalItems key={testimonalSlide.id} testimonalSlide={testimonalSlide}></TestimonalItems>)
}
</div>

</>
);
};

export default Testimonial;