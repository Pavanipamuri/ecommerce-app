const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const model = require("../models/models");


// User Registration
router.post("/register", async (req,res)=>{

    const {name,email,password,role} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    model.registerUser(
        [name,email,hashedPassword,role || "user"],
        (err,result)=>{

            if(err)
                return res.status(500).send(err);

            res.send("User Registered Successfully");
        }
    );
});



// User Login
router.post("/login",(req,res)=>{

    const {email,password}=req.body;

    model.findUserByEmail(email,async(err,result)=>{

        if(err)
            return res.status(500).send(err);


        if(result.length===0)
            return res.send("User Not Found");


        const user=result[0];

        const checkPassword =
        await bcrypt.compare(password,user.password);


        if(!checkPassword)
            return res.send("Invalid Password");


        const token = jwt.sign(
            {
                id:user.id,
                role:user.role
            },
            process.env.JWT_SECRET
        );


        res.json({
            message:"Login Success",
            token:token,
            role:user.role
        });

    });

});



// Get Products
router.get("/products",(req,res)=>{

    model.getProducts((err,result)=>{

        if(err)
            res.status(500).send(err);

        else
            res.json(result);
    });
});



// Add Product
router.post("/products",(req,res)=>{

    const data=[
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.image
    ];


    model.addProduct(data,(err,result)=>{

        if(err)
            res.status(500).send(err);

        else
            res.send("Product Added");
    });
});



// Create Order
router.post("/orders",(req,res)=>{

    model.createOrder(
        [
            req.body.user_id,
            req.body.product_id,
            req.body.quantity,
            req.body.total
        ],
        (err,result)=>{

            if(err)
                res.status(500).send(err);

            else
                res.send("Order Placed");
        }
    );

});



module.exports = router;
