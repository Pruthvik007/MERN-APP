const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Model = require("../Models/User.js");
const User = Model.User;
const {
  STATUS,
  getResponse,
  getErrorResponse,
} = require("../Helpers/ResponseHelper");

exports.login = async function (req, res) {
  let response = {};
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      const isValidUser = bcrypt.compareSync(req.body.password, user.password);
      if (isValidUser) {
        const token = jwt.sign(user.email, "shhhhh");
        user.token = token;
        response = getResponse(user, STATUS.SUCCESS, null);
      } else {
        response = getResponse(null, STATUS.FAILURE, "Invalid Credentials");
      }
    } else {
      response = getResponse(null, STATUS.FAILURE, "No User Found !");
    }
  } catch (err) {
    console.log(err);
    response = getErrorResponse(err);
  }
  res.status(200).send(response);
};

exports.signUp = async function (req, res) {
  let response = {};
  try {
    let userBody = req.body;
    userBody.role = "ADMIN";
    userBody.status = "A";
    const hash = bcrypt.hashSync(req.body.password, 10);
    userBody.password = hash;
    const user = new User(userBody);
    let signUpResponse = await user.save();
    response = getResponse(signUpResponse, STATUS.SUCCESS, null);
  } catch (err) {
    console.log(err);
    response = getErrorResponse(err);
  }
  res.status(200).send(response);
};
