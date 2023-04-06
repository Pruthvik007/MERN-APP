const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const employeeRouter = require("./Routes/EmpoyeeRouter.js");
const userRouter = require("./Routes/UserRouter.js");
const { handleError } = require("./Helpers/ErrorHandlers.js");
const { checkIfAuthorized } = require("./Helpers/Middlewares.js");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/employee", checkIfAuthorized);
app.use("/employee", employeeRouter.router);
app.use("/", userRouter.router);
app.use(handleError);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
//   next();
// });

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_DB_URL);
  console.log("database connected");
}

app.listen(process.env.PORT);
