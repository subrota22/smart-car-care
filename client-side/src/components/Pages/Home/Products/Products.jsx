import React, { useEffect, useState } from 'react';
import {BsFillStarFill} from "react-icons/bs" ;
import { NavLink } from 'react-router-dom';
const Products = () => {
//https://smart-car-eight.vercel.app
    const [products , setProducts] = useState([]) ;
    const [search , setSearch] = useState('') ;
    const [asc , setAsc] = useState(true) ;
    useEffect(() => {
    fetch(`http://localhost:3028/products?search=${search}&order=${asc ? "asc" : "desc"}`) 
    .then(res => res.json())
    .then(data => setProducts(data)) ;
    } ,  [search , asc ])
const handleSearchFeild= (searchData) => {
setSearch(searchData) ;
}
    return (
        <div>
        <div className="text-center my-10">
        <h2 className='text-xl font-semibold text-orange-400'>Popular Products</h2> 
          <h2 className='text-3xl font-semibold'>Browse Our Products</h2>  
          <p className='font-semibold text-xl my-2'>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
        </div>
<div className="text-center">
  <button className="btn btn-primary mx-6" 
  onClick={() => setAsc(!asc)}>  { asc ? "Accending order" : "Deccending order" } </button>
<input type="search"  onChange={(e) => handleSearchFeild(e.target.value)}
   className='input  input-success input-bordered my-7 w-96' 
   placeholder='Search by product name like car engine' />
   </div>  
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
         products.map(product => 
    <div key={product._id} className="card w-70  bg-base-200 text-start  shadow-xl">
    <figure><img src={product.productImageUrl} alt="products"  className='h-52 bg-slate-300 w-full pb-2'/></figure>

    <div className="card-body">

<div className="mt-3  text-yellow-400  font-semibold flex">
<BsFillStarFill > </BsFillStarFill>
    <BsFillStarFill > </BsFillStarFill>
    <BsFillStarFill > </BsFillStarFill>
    <BsFillStarFill > </BsFillStarFill>
    <BsFillStarFill > </BsFillStarFill>
</div>


      <h2 className="card-title">{product.productTitle} </h2>
      <p className='font-semibold text-orange-500'>Price : ${product.productPrice}</p>
      <div className="card-actions justify-end">
    <NavLink to={`/product-checkout/${product._id}`}>
    <button className="btn btn-success  text-white">Order Now</button>
    </NavLink>
      </div>
    </div>
  </div>  

  )
}
</div>
        </div>
    );
};

export default Products;