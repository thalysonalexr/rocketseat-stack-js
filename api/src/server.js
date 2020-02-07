const express = require("express");
const router = require("./routes");

const app = express();

app.use(router);

const port = process.env.PORT || 3000;
const host = "0.0.0.0";

app.listen(port, host, () => {
  console.log(`Express running in port ${port}`);
});
