const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const accoutRouter = require("./routes/api/account.js");

const port = 3000;
const uri =
  "mongodb+srv://zinougharbi205:121551132106@cluster0.hcssv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(uri, {
    dbName: "project",
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use("/api/account", accoutRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});