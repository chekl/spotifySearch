const express = require("express");
const articleRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

articleRoutes.route("/articles").get(function (req, res) {
  const db_connect = dbo.getDb();
  db_connect.collection("articles").find({}).toArray(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

articleRoutes.route("/articles/:id").get(function (req, res) {
  const db_connect = dbo.getDb();
  const myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("articles").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = articleRoutes;
