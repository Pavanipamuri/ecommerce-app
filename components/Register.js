import React, {useState} from "react";
import axios from "axios";


function Register(){

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    });


    const register = () => {

        axios.post(
            "http://localhost:5000/api/register",
            user
        )
        .then(res=>{
            alert(res.data);
        });

    };


    return(

        <div>

            <h2>Register</h2>

            <input
            placeholder="Name"
            onChange={(e)=>
                setUser({...user,name:e.target.value})
            }
            />


            <input
            placeholder="Email"
            onChange={(e)=>
                setUser({...user,email:e.target.value})
            }
            />


            <input
            type="password"
            placeholder="Password"
            onChange={(e)=>
                setUser({...user,password:e.target.value})
            }
            />


            <button onClick={register}>
                Register
            </button>


        </div>

    );

}


export default Register;
