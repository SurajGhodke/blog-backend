require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
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
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello");
});

//routers
const articlesRouter = require("./routes/articles");
app.use("/articles", articlesRouter);
//port
const port = process.env.PORT || 5000;
//port connection
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
