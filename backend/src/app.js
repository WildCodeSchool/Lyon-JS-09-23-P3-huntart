const express = require("express");

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

const router = require("./router");

app.use("/api", router);

module.exports = app;
