const express = require("express");
const app = express();
const mongoose = require("mongoose");
const employeeRouter = require("./Routes/EmpoyeeRouter");
const userRouter = require("./Routes/UserRouter");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());
app.use("/employee", employeeRouter.router);
app.use("/", userRouter.router);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  next();
});

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_DB_URL);
  console.log("database connected");
}

app.listen(process.env.PORT);
