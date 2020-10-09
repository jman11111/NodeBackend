const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Sculpture = require("../models/sculpture")

var sculptures = [
  { id: 1, name: "sero" },
  { id: 15, name: "hammer" },
];

router.get("/", async (req, res) => {
  const allSculptures = await Sculpture.find();
  res.send(allSculptures);
});

router.post("/", (req, res) => {
  const { error } = validateSculpture(req.body);
  // either has null error field if successful, or vice versa

  if (error) return res.status(400).send(error);

  const sculpture = {
    id: sculptures.length + 1,
    name: req.body.name,
  };
  sculptures.push(sculpture);
  res.send(sculpture);
});

router.put("/:id", (req, res) => {
  let sculpture = sculptures.find(
    (element) => element.id === parseInt(req.params.id)
  );
  if (!sculpture)
    return res.status(404).send("Could not find blaster with that ID");

  const { error } = validateSculpture(req.body);
  // either has null error field if successful, or vice versa

  if (error) return res.status(400).send(error);

  sculpture.name = req.body.name;
  res.send(sculpture);
});

function validateSculpture(sculpture) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(sculpture);
  // either has null error field if successful, or vice versa
}

router.get("/:id", (req, res) => {
  let sculpture = sculptures.find(
    (element) => element.id === parseInt(req.params.id)
  );
  if (!sculpture) return res.status(400).send("Sculpture not found");
  res.send(sculpture);
});

router.delete("/:id", (req, res) => {
  let sculpture = sculptures.find(
    (element) => element.id === parseInt(req.params.id)
  );
  if (!sculpture) return res.status(400).send("Sculpture not found");
  const index = sculptures.indexOf(sculpture);
  sculptures.splice(index, 1);

  res.send(sculpture);
});

module.exports = router;
