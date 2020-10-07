const cors = require("cors");
const express = require("express");
const { default: Stripe } = require("stripe");
//const stripe = require("stripe")(""); // @TODO: add a stripe key
const uuid = require("uuid");
const PORT = 3000;

const app = express();

// MIDDLEWARE
app.use(express.json());                        // passx along json values
app.use(cors());                                // cross origin resource sharing

// ROUTES
app.get("/", (req, res) => {
  res.send("Microphone Check.")
})

app.post("/payment", (req, res) => {
  const { product, token } = req.body; // destructure a product and a token from client
  const idempontencyKey = uuid(); // assigns a unique key that will prevent user from being charged more than once.

  // log
  console.log("product: ", product);
  console.log("price: $", product.price);
})

// SERVER
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
