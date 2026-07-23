import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [products,setProducts] = useState([]);


  useEffect(()=>{

    axios
    .get("http://localhost:5000/api/products")
    .then((response)=>{
        setProducts(response.data);
    })
    .catch((error)=>{
        console.log(error);
    });

  },[]);



  return (

    <div className="container">

      <h1>E-Commerce Store</h1>


      <div className="products">

        {
          products.map((product)=>(

            <div className="card" key={product.id}>

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <h4>₹ {product.price}</h4>

              <button>
                Add To Cart
              </button>

            </div>

          ))
        }

      </div>


    </div>

  );
}


export default App;
