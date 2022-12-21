

const authToken = (email) => {

    const currentUser = {
        email:email , 
       }
       fetch(`https://smart-car-eight.vercel.app/jwt` , {
       method:"POST" ,
       headers : {
       'content-type' : 'application/json'
       }
       , 
       body: JSON.stringify(currentUser)
       })
       .then(res => res.json())
       .then(data => localStorage.setItem("smart-car-care" , data.generateNewToken) ) 
       .catch((error) => console.log(error))
    }
    export default authToken;