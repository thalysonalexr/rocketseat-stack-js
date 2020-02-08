const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const mongoUrl = "mongodb://localhost:27017/nodeapi";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true
}, () => console.log("Database is connected."));

const app = express();

app.use(router);

const port = process.env.PORT || 3000;
const host = "0.0.0.0";

app.listen(port, host, () => {
  console.log(`Express running in port ${port}`);
});
