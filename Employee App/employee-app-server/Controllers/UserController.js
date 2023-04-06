const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Model = require("../Models/User.js");
const User = Model.User;
const {
  getSuccessResponse,
  getFailureResponse,
} = require("../Helpers/ResponseHelper");
const { validateUser } = require("../Helpers/Validator.js");
exports.login = async function (req, res, next) {
  let response = {};
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      const isValidUser = bcrypt.compareSync(req.body.password, user.password);
      if (isValidUser) {
        response = getSuccessResponse(user);
        response.accessToken = jwt.sign(user.email, process.env.JWT_SECRET);
      } else {
        response = getFailureResponse("Invalid Credentials");
      }
    } else {
      response = getFailureResponse("No User Found !");
    }
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};

exports.signUp = async function (req, res, next) {
  let response = {};
  try {
    let errorMessage = validateUser(req.body);
    if (errorMessage) {
      response = getFailureResponse(errorMessage);
    } else {
      let userBody = req.body;
      userBody.role = "ADMIN";
      userBody.status = "A";
      const user = new User(userBody);
      let signUpResponse = await user.save();
      response = getSuccessResponse(signUpResponse);
    }
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
