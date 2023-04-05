const Model = require("../models/Employee");
const {
  STATUS,
  getResponse,
  getErrorResponse,
} = require("../Helpers/ResponseHelper");
const Employee = Model.Employee;

exports.getEmployees = async function (req, res) {
  let response = {};
  try {
    const employees = await Employee.find();
    response = getResponse(employees, STATUS.SUCCESS, null);
  } catch (err) {
    console.log(err);
    response = getErrorResponse(err);
  }
  res.status(200).send(response);
};

exports.getEmployee = async function (req, res) {
  let response = {};
  try {
    const employee = await Employee.findById(req.params.id);
    response = getResponse(employee, STATUS.SUCCESS, null);
  } catch (err) {
    console.log(err);
    response = getErrorResponse(err);
  }
  res.status(200).send(response);
};

exports.createEmployee = async function (req, res) {
  let response = {};
  try {
    const employee = new Employee(req.body);
    const saveResponse = await employee.save();
    response = getResponse(saveResponse, STATUS.SUCCESS, null);
  } catch (err) {
    console.log(err);
    response = getErrorResponse(err);
  }
  res.status(200).send(response);
};

exports.replaceEmployee = async function (req, res) {
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
    response = getResponse(replaceResponse, STATUS.SUCCESS, null);
  } catch (err) {
    console.log(err);
    response = getErrorResponse(err);
  }
  res.status(200).send(response);
};

exports.updateEmployee = async function (req, res) {
  let response = {};
  try {
    let updateResponse = await Employee.findOneAndUpdate(
      req.body._id,
      req.body,
      {
        new: true,
      }
    );
    response = getResponse(updateResponse, STATUS.SUCCESS, null);
  } catch (err) {
    console.log(err);
    response = getErrorResponse(err);
  }
  res.status(200).send(response);
};

exports.deleteEmployee = async function (req, res) {
  let response = {};
  try {
    let employee = await Employee.findOneAndDelete({ _id: req.params.id });
    response = getResponse(employee, STATUS.SUCCESS, null);
  } catch (err) {
    console.log(err);
    response = getErrorResponse(err);
  }
  res.status(200).send(response);
};
