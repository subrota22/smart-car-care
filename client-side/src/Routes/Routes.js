
import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/Pages/AddProduct/AddProduct";
import AddServices from "../components/Pages/AddService/AddService";
import CheckOut from "../components/Pages/CheckOut/CheckOut";
import CheckOutProduct from "../components/Pages/CheckOutProduct/CheckOutProduct";
import Home from "../components/Pages/Home/Home/Home";
import Login from "../components/Pages/Login/Login";
import Orders from "../components/Pages/Orders/Orders/Orders";
import Register from "../components/Pages/Register/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Main from "../Layout/Main";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import ResetPassword from "../components/Pages/ResetPassword/ResetPassword";

export const routes = createBrowserRouter([
{
path:"/" , element : <Main></Main> , children: [
{
path:"/" , element :<Home></Home>
} ,
{
path:"/checkout/:id" , 
loader:async({params}) =>
fetch(`https://smart-car-eight.vercel.app/services/${params.id}`)
, element :<PrivateRouter> <CheckOut></CheckOut></PrivateRouter>
} ,

{
path:"/product-checkout/:id" , 
loader:async({params}) =>
fetch(`https://smart-car-eight.vercel.app/products/${params.id}`)
, element : <PrivateRouter><CheckOutProduct></CheckOutProduct> </PrivateRouter>
} ,

{
path:"/add-services" , element : <PrivateRouter><AddServices></AddServices></PrivateRouter>
}
,


{
path:"/add-product" ,  element :  <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
}
,
{
path:"/orders/"  ,element :  <PrivateRouter><Orders></Orders></PrivateRouter>
}
,
{
path:"/register" , element : <Register></Register>
}
,
{
path:"/login" , element : <Login></Login>
}  ,
{
path:"/reset-password"  , element : <ResetPassword></ResetPassword>
} ,
{
path:"*" , element: <PageNotFound></PageNotFound>
}
]
}
])
