const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes");

const mongoUrl = "mongodb://mongo:27017/nodeapi";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log("Database is connected."));

const app = express();

app.use(cors());
app.use(express.json());
app.use("/v1", router);

const port = process.env.PORT || 3000;
const host = "0.0.0.0";

app.listen(port, host, () => {
  console.log(`Express running in port ${port}`);
});
