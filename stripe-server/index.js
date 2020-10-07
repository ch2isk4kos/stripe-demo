const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(""); // @TODO: add a stripe key
const uuid = require("uuid/v4");
const PORT = 3000;

const app = express();