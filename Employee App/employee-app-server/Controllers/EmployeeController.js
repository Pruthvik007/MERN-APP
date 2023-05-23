const Model = require("../Models/Employee.js");
const {
  getSuccessResponse,
  getFailureResponse,
} = require("../Helpers/ResponseHelper.js");
const Employee = Model.Employee;
const { validateEmployee } = require("../Helpers/Validator.js");

exports.getEmployees = async function (req, res, next) {
  let response = {};
  try {
    const currentPage = req.query.page || 1;
    const perPage = 5;
    const employees = await Employee.find()
      .skip(perPage * (currentPage - 1))
      .limit(perPage);
    const totalEmployees = await Employee.countDocuments();
    const totalPages = Math.ceil(totalEmployees / perPage);
    response = getSuccessResponse({
      employees: employees,
      totalPages: totalPages,
      currentPage: currentPage,
    });
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};

exports.getEmployee = async function (req, res, next) {
  let response = {};
  try {
    const employee = await Employee.findById(req.params.id);
    response = getSuccessResponse(employee);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};

exports.createEmployee = async function (req, res, next) {
  let response = {};
  try {
    let errorMessage = validateEmployee(req.body);
    if (errorMessage) {
      response = getFailureResponse(errorMessage);
      res.status(200).send(response);
    } else {
      const employee = new Employee(req.body);
      const saveResponse = await employee.save();
      response = getSuccessResponse(saveResponse);
      res.status(200).send(response);
    }
  } catch (err) {
    next(err);
  }
};

exports.replaceEmployee = async function (req, res, next) {
  let response = {};
  try {
    const id = req.params.id;
    let employee = await Employee.findById(id);
    employee = Object.assign(employee, { ...req.body });
    let replaceResponse = await Employee.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    response = getSuccessResponse(replaceResponse);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};

exports.updateEmployee = async function (req, res, next) {
  let response = {};
  try {
    let updateResponse = await Employee.findOneAndUpdate(
      req.body._id,
      req.body,
      {
        new: true,
      }
    );
    response = getSuccessResponse(updateResponse);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};

exports.deleteEmployee = async function (req, res, next) {
  let response = {};
  try {
    let employee = await Employee.findOneAndDelete({ _id: req.params.id });
    response = getSuccessResponse(employee);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};
