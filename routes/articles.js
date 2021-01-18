const express = require("express");
const router = express.Router();
const Articles = require("../models/article");

//Get all articles
router.get("/", (req, res) => {
  Articles.find()
    .sort({ createdAt: "desc" })
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

//find article
router.get("/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//find article and update
router.put("/update/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then((article) => {
      (article.title = req.body.title),
        (article.article = req.body.article),
        (article.author = req.body.author);

      article
        .save()
        .then(() => res.json("the article is updated successfully!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//find article and delete
router.delete("/:id", (req, res) => {
  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("So sad.. article is DELETED"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
