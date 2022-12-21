require("dotenv").config() ;
const express = require('express');
const app = express() ;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 3028 ;
const cors = require("cors") ;  
const {json} = express() ;  
const jwt = require("jsonwebtoken") ;
//kQD589KaaCdHoJJZ
//middle ware 
app.use(cors()) ;
app.use(express.json()) ;
//connect with mongo db  
try {
const uri = process.env.mongoUrl;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const ordersCollection = client.db("smart-car").collection("orders") ;
//jwt token verify
function verifyJWT (req  , res , next ) {
const authHeader = req.headers.authorization;
if(!authHeader) {
return res.status(401).send({message:"unauthorize access"}) ;
}
const token = authHeader.split(' ')[1] ;
jwt.verify(token , process.env.secret_key , function(error , decodedData) {
if(error){
return res.status(403).send({message:"unauthorize access"}) ;
}
req.decoded = decodedData ; 
next() ;
})
}
//add new services      
app.post("/services" , async (req , res) => {
const collection = client.db("smart-car").collection("services");
const servicesData = req.body ;
const servicePrice = servicesData.servicePrice ;
const serviceImageUrl = servicesData.serviceImageUrl ;
const serviceTitle = servicesData.serviceTitle;
const servicePublishDate = servicesData.servicePublishDate ;
const result = await collection.insertOne({
   servicePrice:servicePrice ,
   serviceImageUrl:serviceImageUrl ,
   serviceTitle:serviceTitle ,
   servicePublishDate:servicePublishDate ,
}) ;
res.send(result) ;
})
//add new products 
app.post("/prducts" , async (req , res) => {
const productCollection = client.db("smart-car").collection("products") ;
const productsData = req.body ;
const productResult = await productCollection.insertOne(productsData) ;
res.send(productResult) ;
})
//add new orders  
app.post('/orders' , async(req , res) => {
   const ordersData = req.body ;
   const ordersResult = await ordersCollection.insertOne(ordersData) ;
   res.send(ordersResult) ;
   })
//get product 
app.get("/products" , async (req , res) => {
   const productCollection = client.db("smart-car").collection("products") ;
   const search = req.query.search.toLocaleLowerCase() ;
   const query = {
   $text:{
   $search:search , 
   }
} 
const order = req.query.order === "asc" ? 1 : -1 ;
   const getData = await productCollection.find(query).sort({productPrice:order}).toArray() ;
   res.send(getData) ;
   })
   //get services 
app.get("/services" , async (req , res) => {
   const productCollection = client.db("smart-car").collection("services") ;
   // const query = { servicePrice:{$in:[22 , 25 , 30] } } ;
   // const query = { servicePrice:{$nin:[22 , 25 , 30] } } ;
   // const query = { servicePrice:{$lte:28 } } ;
   //  const query = { servicePrice:{$lt:28 } } ;
   //  const query = { servicePrice:{$gte:28 } } ;
   //  const query = { servicePrice:{$gt:28 } } ;
   //  const query = { servicePrice:{$ne:28 } } ;
   // const query = { $and : [{servicePrice:{$gt:22}} , {servicePrice:{$lt:30}} ] } ;
   // const query = {servicePrice:{$not:{$gte:30}}} ;
   // const query = { $or : [{servicePrice:{$gt:22}} , {servicePrice:{$lt:30}} ] } ;

   const search = req.query.search.toLowerCase() ;
   const order = req.query.order === "asc" ?  1 : - 1 ;
 
   const query = {
      $text:{
       $search:search
      }
   }
   const getSearch = query ? query : {} ;
   const getData = await productCollection.find(getSearch).
   sort({servicePrice:order}).toArray() ;
   res.send(getData) ;
   })
//get orders informations
app.get("/orders" , async(req , res) => {
const ordersCollection = client.db("smart-car").collection("orders") ;
const queryEmail = req.query.email  ;
const cursor = ordersCollection.find({email:queryEmail}) ;
const ordersResult = await cursor.toArray() ;
res.send(ordersResult) ;
})

//get single services  
app.get("/services/:id" , async (req , res) => {  
const serviceCollection = client.db("smart-car").collection("services");
const id = req.params.id ;
const query = {_id : ObjectId(id)} ;
const  singleServiceResult = await serviceCollection.findOne(query) ;
res.send(singleServiceResult) ;
})
//get single products 
app.get("/products/:id" , async (req , res) => {
   const productsCollection = client.db("smart-car").collection("products");
   const id = req.params.id ;
   const query = {_id : ObjectId(id)} ;
   const  singleProductsResult = await productsCollection.findOne(query) ;
   res.send(singleProductsResult) ;
   })
// single order update  
 app.patch("/orders/:id" , async(req , res) => {
const ordersCollection = client.db("smart-car").collection("orders") ;
 const id = req.params.id ;
 const status = req.body.status ;
 const query  = {_id : ObjectId(id)} ;
 const updateDoc = {
   $set:{
      status:status , 
   }
 }
 const result = await ordersCollection.updateOne(query , updateDoc) ;
 res.send(result) ;
 })                                                                                       
 //delete single orders 
app.delete("/orders/:id"  , async(req , res) => {
const ordersCollection = client.db("smart-car").collection("orders") ;
 const id = req.params.id ;
 const query = {_id : ObjectId(id)} ;
 const result = await ordersCollection.deleteOne(query) ;
 res.send(result) ;
 })
//load data by limitation
app.get("/orders-data"  , verifyJWT ,  async (req , res) => {
const ordersCollection = client.db("smart-car").collection("orders") ;
const userEmail = req.query.email ; 
if(req.decoded.email !== userEmail){
return res.status(403).send({message:"authorize access"}) 
}
const page = parseInt (req.query.page ); 
const size = parseInt ( req.query.size) ;
const cursor = ordersCollection.find({email:userEmail}) ;
const orders = await cursor.skip(page * size ).limit(size).toArray() ;
const count = await ordersCollection.estimatedDocumentCount() ;
res.status(201).send({count ,  orders}) ;
 }) 
 //jwt check 
 app.post("/jwt" , (req , res) => {
 const jwtToken = process.env.secret_key ; 
 const email = req.body ; //direct take object 
 const generateNewToken = jwt.sign(email , jwtToken , {expiresIn : "1d" } ) ; 
res.send({generateNewToken}) ;
 })

 app.get("/allOrders" , async (req , res ) => {
   const email = req.query.email ;

const orders = await ordersCollection.find({email:email}).toArray() ;
res.send(orders) ;
 })
//-------------> new  

} catch (error) {
   
console.log(error);
 
}finally {
   //ok
}
//app send to home page 
app.get("/" , (req ,res) => {
res.send("Hello friend") ;
}) ;

//app post data 

app.listen(port , (req , res) => {
console.log("Your server running on port " + port);
}) ;