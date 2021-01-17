require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//database connection
//for local enviroment: DATABASE=mongodb://localhost:27017/blog
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//middlewares
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send("hello");
});
//port
const port = process.env.PORT || 5000;
//connection
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
