import React, {useState} from "react";
import axios from "axios";


function AddProduct(){

    const [product,setProduct] = useState({
        name:"",
        description:"",
        price:"",
        image:""
    });



    const addProduct = () => {

        axios.post(
            "http://localhost:5000/api/products",
            product
        )
        .then((res)=>{

            alert(res.data);

            setProduct({
                name:"",
                description:"",
                price:"",
                image:""
            });

        });

    };


    return(

        <div className="admin">

            <h2>Add Product (Admin)</h2>


            <input
            placeholder="Product Name"
            value={product.name}
            onChange={(e)=>
                setProduct({
                    ...product,
                    name:e.target.value
                })
            }
            />


            <input
            placeholder="Description"
            value={product.description}
            onChange={(e)=>
                setProduct({
                    ...product,
                    description:e.target.value
                })
            }
            />


            <input
            placeholder="Price"
            value={product.price}
            onChange={(e)=>
                setProduct({
                    ...product,
                    price:e.target.value
                })
            }
            />


            <input
            placeholder="Image URL"
            value={product.image}
            onChange={(e)=>
                setProduct({
                    ...product,
                    image:e.target.value
                })
            }
            />


            <button onClick={addProduct}>
                Add Product
            </button>


        </div>

    );

}


export default AddProduct;
