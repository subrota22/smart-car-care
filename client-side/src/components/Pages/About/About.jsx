import React from 'react';
import person from "../../../assets/images/about_us/person.jpg" ;
import parts from "../../../assets/images/about_us/parts.jpg" ;
const About = () => {
    return (
 <div className='my-20 rounded-md'>
<div className="hero  min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row justify-between">
<div className='relative'>
<img src={person} alt="person" className="max-w-sm rounded-lg h-96  first-letter:  shadow-2xl" />
<img src={parts} alt="parts" className="max-w-sm absolute right-0 top-1/2 rounded-lg h-52  shadow-2xl" />

</div>
    <div className='p-10'>
    <h2 className="text-2xl font-bold text-start text-rose-600 py-3">
      About us 
      </h2>
      <p className="text-5xl font-bold my-2">
        We are qualified  <br /> & of experience in <br /> this field
      </p>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
      <button className="btn bg-orange-600 border-none">Get More Info </button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default About;