//initializing express
const express = require("express");
const port = 8080;
const app = express();
//-----

//establishing connection with mongo db
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//-----

//middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
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
