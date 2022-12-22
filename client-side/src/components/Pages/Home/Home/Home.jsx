import React from 'react';
// import { useEffect } from 'react';
// import { AuthContext } from '../../../../UserContext/UserContext';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import CoreFeture from '../CoreFeture/CoreFeture';
import CountDown from '../CountDown/CountDown';
import OurTeam from '../OurTeam/OurTeam';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import WorkingTime from '../WorkingTime/WorkingTime';

const Home = () => {
// const {user} = React.useContext(AuthContext) ;
// useEffect(() => {
// fetch(`https://smart-car-eight.vercel.app/orders-data?email=${user.email}` , {
// headers:{
// authorization : localStorage.getItem("smart-car-care") 
// }
// })
// } , [ user.email ])
return (
<React.Fragment>
<div className='container'>
<CountDown></CountDown>
<Banner></Banner>
<About></About>
<Services></Services>
<WorkingTime></WorkingTime>
<Products></Products>
<OurTeam></OurTeam>
<CoreFeture></CoreFeture>
<Testimonial></Testimonial>
</div>
</React.Fragment>
);
};

export default Home;