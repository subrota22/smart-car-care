import React from 'react';
import "./nav.css" ;
const RwdTailwindCss = () => {

    return (
        <div>
            <h2 className='text-2xl font-bold text-blue-500 text-center'> Grid resposive design </h2>
  
        {/* <!-- gird rwd -->  */}
<div class="my-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
 <div className='bg-sky-400 my-6 rounded-md py-10 text-white text-center px-10  text-2xl font-bold '>01</div>
 <div className='bg-gradient-to-r from-yellow-500 via-blue-600  my-6 rounded-md py-10 text-white text-center px-10  text-2xl font-bold '>02</div>
 <div className='bg-gradient-to-br from-sky-400  via-purple-500 to-pink-500 rounded-md py-10 text-white text-center px-10  text-2xl font-bold '>03</div>
 <div className='bg-gradient-to-r from-indigo-500 via-blue-600 to-pink-500 rounded-md py-10 text-white text-center px-10  text-2xl font-bold '>04</div>
</div>
<h2 className='text-2xl font-bold text-blue-500 text-center'> Flex resposive design </h2>
    {/* <!-- flex rwd -->  */}
    <div class="flex flex-col sm:flex-col md:flex-row-reverse lg:flex-row xl:flex-row-reverse justify-evenly">
 <div className='bg-sky-400 my-6 justify-center rounded-md py-10 text-white text-center px-20  text-2xl font-bold '>01</div>
 <div className='bg-sky-400 my-6 rounded-md py-10 text-white text-center px-20  text-2xl font-bold '>02</div>
 <div className='bg-sky-400 my-6 rounded-md py-10 text-white text-center px-20  text-2xl font-bold '>03</div>
 <div className='bg-sky-400 my-6 rounded-md py-10 text-white text-center px-20  text-2xl font-bold '>04</div>
</div>

<div className="carousel w-full">
  <div id="slide20" className="carousel-item relative w-full">
    <div className="text text-center">
       <div className="overly">
       <p className='text-start'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias temporibus perspiciatis qui odit deleniti expedita ducimus animi incidunt aliquam quaerat iure dignissimos aspernatur commodi, officia nisi iste eveniet dolores harum, sapiente non dolorem. Vel in voluptatum tenetur, accusantium atque odio et, fugiat fugit natus suscipit accusamus saepe dicta explicabo?
        </p>

        <button className="btn btn-primary mt-14 mx-auto">Get started</button>
       </div>
    </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide23" className="btn btn-circle">❮</a> 
      <a href="#slide21" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide21" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide20" className="btn btn-circle">❮</a> 
      <a href="#slide22" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide22" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide21" className="btn btn-circle">❮</a> 
      <a href="#slide23" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide23" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide22" className="btn btn-circle">❮</a> 
      <a href="#slide20" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default RwdTailwindCss;