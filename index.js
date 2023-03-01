//initializing express
const express = require("express");
const port = 8080;
const app = express();
//-----

//establishing connection with mongo db
const { connectToDB } = require("./connection");
connectToDB();
//-----

//middleware
app.use(express.json());
//-----

//api routes
const userRoute = require("./routes/User/user");
const registerRoute = require("./routes/User/auth");
const productRoute = require("./routes/Product/product");
const cartRoute = require("./routes/Cart/cart");
const orderRoute = require("./routes/Order/order");
//-----

//using routes on different api calls
app.use("/api/users", userRoute);
app.use("/api/users", registerRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
//-----

//starting the app on port 8080
app.listen(port, () => {
  console.log("App is running on", port);
});
//-----
