const db = require("../config/db");


// Register User
exports.registerUser = (userData, callback) => {
    const sql = `
        INSERT INTO users(name,email,password,role)
        VALUES(?,?,?,?)
    `;

    db.query(sql, userData, callback);
};


// Find User by Email
exports.findUserByEmail = (email, callback) => {
    const sql = `
        SELECT * FROM users WHERE email = ?
    `;

    db.query(sql, [email], callback);
};


// Get All Products
exports.getProducts = (callback) => {
    const sql = `
        SELECT * FROM products
    `;

    db.query(sql, callback);
};


// Add Product (Admin)
exports.addProduct = (productData, callback) => {
    const sql = `
        INSERT INTO products(name,description,price,image)
        VALUES(?,?,?,?)
    `;

    db.query(sql, productData, callback);
};


// Create Order
exports.createOrder = (orderData, callback) => {
    const sql = `
        INSERT INTO orders
        (user_id,product_id,quantity,total)
        VALUES(?,?,?,?)
    `;

    db.query(sql, orderData, callback);
};


// Get User Orders
exports.getOrders = (userId, callback) => {
    const sql = `
        SELECT * FROM orders 
        WHERE user_id = ?
    `;

    db.query(sql, [userId], callback);
};
