const express = require('express');
const app = express();
const Joi = require('joi');
// express, joi

app.use(express.json());

var blasters = [
    {id: 1,name: "stryfe"},
    {id: 15,name: "hammershot"}
]

app.get('/', (req,res) => {
    res.send('hello person');
});

app.get('/api/blasters', (req,res) => {
    res.send(blasters);
});

app.post('/api/blasters',(req,res) => {

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

app.put('/api/blasters/:id',(req,res) => {
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

app.get('/api/blasters/:id', (req,res) => {
    let blaster = blasters.find((element) => element.id === parseInt(req.params.id));
    if(!blaster) return res.status(400).send("Blaster not found");
    res.send(blaster);
});

app.delete('/api/blasters/:id', (req,res) => {
    let blaster = blasters.find((element) => element.id === parseInt(req.params.id));
    if(!blaster) return res.status(400).send("Blaster not found");
    const index = blasters.indexOf(blaster);
    blasters.splice(index,1);

    res.send(blaster);

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});