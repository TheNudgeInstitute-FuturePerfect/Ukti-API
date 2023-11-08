const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')

const uktiApi = require("./uktiApi/index.js");

const app = express();

mongoose.connect(process.env.MongoDBConnStrng+"ukti", {
  useNewUrlParser: true,
});

// Use the json and urlencoded middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/UKTI-API/uktiApi", uktiApi);

app.listen(process.env.WHATSAPP_PORT, () => {
  console.log(`API listening on port ${process.env.UKTIAPI_PORT}!`);
});
