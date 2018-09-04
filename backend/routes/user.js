const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  const users = await User.getUsers();
  res.status(200).send(users);
});

router.post("/", async (req, res) => {
  console.log("el user : ", {
    nom: req.body.nom,
    email: req.body.email,
    telephone: req.body.telephone
  });
  const { error } = User.validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(401).send("user already exist");

  user = await User.createUser(
    req.body.nom,
    req.body.email,
    req.body.telephone
  );
  res.status(200).send(user);
});

router.put("/:id", async (req, res) => {});

router.delete("/", async (req, res) => {});

module.exports = router;
