const { Router } = require("express");
const { model } = require("mongoose");
const { restart } = require("nodemon");
const User = require("../models/User");

const router = Router();

router.post("/newuser", (req, res) => {
  try {
    User.create(req.body).then((user) => {
      res.status(200).send({ message: "User created" });
    });
  } catch (error) {
    res.send({ error });
  }
});

router.get("/", (req, res) => {
  res.status(200).json({ res: "deu ok" });
});

module.exports = router;
