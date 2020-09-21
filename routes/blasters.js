const express = require('express');
const router = express.Router();
const Joi = require('joi');

var blasters = [
    {id: 1,name: "stryfe"},
    {id: 15,name: "hammershot"}
]

router.get('/', (req,res) => {
    res.send(blasters);
});

router.post('/',(req,res) => {

    const { error } = validateBlaster(req.body);
    // either has null error field if successful, or vice versa

    if (error) return res.status(400).send(error);
    
    const blaster = {
        id: blasters.length + 1,
        name: req.body.name
    }
    blasters.push(blaster);
    res.send(blaster);
});

router.put('/:id',(req,res) => {
    let blaster = blasters.find((element) => element.id === parseInt(req.params.id));
    if (!blaster) return res.status(404).send("Could not find blaster with that ID")

    const { error } = validateBlaster(req.body);
    // either has null error field if successful, or vice versa

    if (error) return res.status(400).send(error);

    blaster.name = req.body.name;
    res.send(blaster);
    
});

function validateBlaster(blaster){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(blaster)
    // either has null error field if successful, or vice versa

}

router.get('/:id', (req,res) => {
    let blaster = blasters.find((element) => element.id === parseInt(req.params.id));
    if(!blaster) return res.status(400).send("Blaster not found");
    res.send(blaster);
});

router.delete('/:id', (req,res) => {
    let blaster = blasters.find((element) => element.id === parseInt(req.params.id));
    if(!blaster) return res.status(400).send("Blaster not found");
    const index = blasters.indexOf(blaster);
    blasters.splice(index,1);

    res.send(blaster);

});

module.exports = router;