import React, {useState} from "react";
import axios from "axios";


function Login(){

    const [user,setUser]=useState({
        email:"",
        password:""
    });


    const login=()=>{

        axios.post(
            "http://localhost:5000/api/login",
            user
        )
        .then(res=>{

            alert(res.data.message);

            localStorage.setItem(
                "token",
                res.data.token
            );

        });

    };


    return(

        <div>

            <h2>Login</h2>


            <input
            placeholder="Email"
            onChange={(e)=>
                setUser({
                    ...user,
                    email:e.target.value
                })
            }
            />


            <input
            type="password"
            placeholder="Password"
            onChange={(e)=>
                setUser({
                    ...user,
                    password:e.target.value
                })
            }
            />


            <button onClick={login}>
                Login
            </button>


        </div>

    );

}


export default Login;
