const express = require("express");
const router = express.Router();
const Articles = require("../models/article");

//Get all articles
router.get("/", (req, res) => {
  Articles.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// add new article
router.post("/add", (req, res) => {
  const newArticle = new Articles({
    title: req.body.title,
    article: req.body.article,
    author: req.body.author,
  });

  newArticle
    .save()
    .then(() => res.json(" Hola.. new Article posted successfuly!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
