import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Card
 from './components/Card';
function Home() {

   let [products,setProducts]=useState([]);

  
   useEffect(()=>(fetchData),[]);

    let fetchData=async ()=>{
        let response= await fetch("https://fakestoreapi.com/products")
        let data=await response.json();
        console.log(data);
        setProducts(data);
    }
    
  return (
    <div>
    <div className='container'>
      <div className="container">
         <Nav></Nav>
      </div>
      <div className="container">
        <div className=" row justify-content-center flex-wrap  ">
            {products.map((product)=>(
                 <Card product={product} key={product.id}></Card>
            ))}
            
        </div>
      </div>
    </div>  
    </div>
  )
}

export default Home
