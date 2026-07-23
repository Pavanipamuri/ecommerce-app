import React from "react";
import axios from "axios";


function Checkout({cart}){


    const placeOrder = () => {


        cart.forEach((item)=>{


            const order = {

                user_id:1,
                product_id:item.id,
                quantity:1,
                total:item.price

            };


            axios.post(
                "http://localhost:5000/api/orders",
                order
            )
            .then((res)=>{

                alert(res.data);

            });


        });


    };



    return(

        <div>


            <h2>
                Checkout
            </h2>


            <button onClick={placeOrder}>

                Place Order

            </button>


        </div>

    );

}


export default Checkout;
