import { useState,useEffect } from "react"
import ProductView from "./ProductView"

const Product = ()=>{

    
   const [products,setProducts] = useState([])

    useEffect(()=>{
        
        fetch("https://dummyjson.com/products").then(result=>{
            return result.json()
        }).then(data=>{
            setProducts(data.products);
            
            
        }).catch(err=>{
            console.error(err);
        })

    },[])
    return <>

   
  

<div class="container">

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

   {products.map(ele=>
    <ProductView key={ele.id} Product = {ele}></ProductView>
   )}
  
  
</div>
</div>

   
</>

}



export default Product