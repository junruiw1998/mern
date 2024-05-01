require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes.jsx");

//express app
const app = express();

//middleware
app.use(cors());
app.use(express.json()); //parse request JSON and return the object in req.body
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/todo", todoRoutes);

//connect to db
mongoose
  .connect(process.env.mongoURI)
  .then(() => {
    app.listen(process.env.port);
    console.log("connect to the db and listen on port", process.env.port);
  })
  .catch((err) => {
    console.log(err);
  });
