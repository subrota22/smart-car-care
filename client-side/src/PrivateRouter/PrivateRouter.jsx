import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import CircleLoader from "react-spinners/CircleLoader" ;
const PrivateRouter = ({children}) => {
const {user  , loading} = React.useContext(AuthContext) ;
const location = useLocation() ;
if(loading) {
return <>
<h2 style={{ margin:"15% 50%"}}> 
<CircleLoader color="#36d7b7" />    </h2>
</>
}

if(user.uid) {
return children;
} ;
return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRouter;