const express = require("express");
const cors = require("cors");
const { port } = require("./config");
const app = express();

app.listen(port, () => console.log("Howdy express is online", port));

console.log("noDEEMON");
