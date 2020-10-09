const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Sculpture = require("../models/sculpture");
const SculptureSchema = require("../schema/sculptureSchema");

router.get("/", async (req, res) => {
  const allSculptures = await Sculpture.find();
  res.send(allSculptures);
});

router.post("/", async (req, res) => {
  const { error } = validateSculpture(req.body);
  // either has null error field if successful, or vice versa
  if (error) return res.status(400).send(error);
  const { name, description, dateMade, photoURL } = req.body;
  const sculpture = new Sculpture({
    name,
    description,
    dateMade,
    photoURL,
  });

  const result = await sculpture.save(req.body);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  let sculpture = null;
  try {
    sculpture = await Sculpture.findById(req.params.id);
  } catch (error) {
    return res.status(400).send("Sculpture not found");
  }

  const { error } = validateSculpture(req.body);
  // either has null error field if successful, or vice versa

  if (error) return res.status(400).send(error);

  const { name, description, dateMade, photoURL } = req.body;

  if (name) sculpture.name = name;
  if (description) sculpture.description = description;
  if (dateMade) sculpture.dateMade = dateMade;
  if (photoURL) sculpture.photoURL = photoURL;

  result = await sculpture.save();

  res.send(result);
});

function validateSculpture(sculpture) {
  return SculptureSchema.validate(sculpture);
  // either has null error field if successful, or vice versa
}

router.get("/:id", async (req, res) => {
  let sculpture = null;
  try {
    sculpture = await Sculpture.findById(req.params.id);
  } catch (error) {
    return res.status(400).send("Sculpture not found");
  }
  res.send(sculpture);
});

router.delete("/:id", async (req, res) => {
  let sculpture = null;
  try {
    sculpture = await Sculpture.deleteOne({ _id: req.params.id });
  } catch (error) {
    return res.status(400).send("Sculpture not found");
  }

  res.send(sculpture);
});

module.exports = router;
