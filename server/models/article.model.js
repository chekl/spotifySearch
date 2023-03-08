const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    "description": {
      "type": "String"
    },
    "text": {
      "type": [
        "String"
      ]
    },
    "title": {
      "type": "String"
    },
    "_id": {
      "type": "ObjectId"
    }
  });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
