var { model, Schema } = require("mongoose");
const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  doj: { type: Date, required: true },
  gender: { type: String, required: true },
  mobile: { type: Number, required: true },
  location: { type: String, required: true },
  status: { type: String, required: true },
},{ collection : 'Employees' });

exports.Employee = model("Employee", EmployeeSchema);
