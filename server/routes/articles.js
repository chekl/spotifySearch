const router = require("express").Router();
const Article = require("../models/article.model");

router.route('/').get((req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Article.findById(req.params.id)
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;