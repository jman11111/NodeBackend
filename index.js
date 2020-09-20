const express = require('express');
const app = express();
const blasters = require('./routes/blasters')
const config = require('config');
const startupDebugger = require('debug')('app:startup');
const databaseDebugger = require('debug')('app:db');
// express, joi
//USE DEBUG instead of console.log
//config can be used for env variables such as passwords, or ones that change based on development phase
//Make file for each resource in Routes folder when it comes to file structure


startupDebugger('Starting up');

console.log(config.get('name'));

app.use(express.json());
app.use('/api/blasters',blasters);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});