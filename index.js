const express = require("express");
const app = express();
const cors = require("cors");
const sculptures = require("./routes/sculptures");
const config = require("config");
const startupDebugger = require("debug")("app:startup");
const databaseDebugger = require("debug")("app:db");
// express, joi, ES6 Javascript
//USE DEBUG instead of console.log
//config can be used for env variables such as passwords, or ones that change based on development phase
//Make file for each resource in Routes folder when it comes to file structure

startupDebugger("Starting up");

console.log(config.get("name"));
console.log(process.env.API_CONN);

app.use(express.json());
app.use(cors());
app.use("/api/sculptures", sculptures);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
