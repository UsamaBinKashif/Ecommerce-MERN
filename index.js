const express = require("express");
const port = 8080;
const app = express();
const { connectToDB } = require("./connection");
connectToDB();

app.use(express.json())
const userRoute = require("./routes/User Routes/user");

app.use("/api/users", userRoute);
app.listen(port, () => {
  console.log("App is running on", port);
});
