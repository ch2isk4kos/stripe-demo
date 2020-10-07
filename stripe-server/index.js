const cors = require("cors");
const express = require("express");
//const stripe = require("stripe")(""); // @TODO: add a stripe key
const uuid = require("uuid");
const PORT = 3000;

const app = express();

// MIDDLEWARE
app.use(express.json());                // passx along json values
app.use(cors());                        // cross origin resource sharing

// ROUTES
app.get("/", (req, res) => {
  res.send("Microphone Check.")
})

// SERVER
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
