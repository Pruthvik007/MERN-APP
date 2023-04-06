var { model, Schema } = require("mongoose");
const EmployeeSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} Is Not A Valid Email !`,
      },
    },
    role: { type: String, required: true },
    doj: { type: Date, required: true },
    gender: {
      type: String,
      required: true,
      enum: {
        values: ["M", "F"],
        message: "Gender {VALUE} Is Not Supported.",
      },
    },
    mobile: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
            v
          );
        },
        message: (props) => `${props.value} Is Not A Valid Phone Number !`,
      },
    },
    location: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["A", "I"],
        message: "Status {VALUE} Is Not Supported",
      },
    },
  },
  { collection: "Employees" }
);

exports.Employee = model("Employee", EmployeeSchema);
