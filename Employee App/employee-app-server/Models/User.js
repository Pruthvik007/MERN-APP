var { model, Schema } = require("mongoose");
const UserSchema = new Schema(
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
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}/.test(
            v
          );
        },
        message: (props) =>
          `Password Must Be Between 8 to 10 Digits Containing atleast one Upper and Lower Case Letters and Special Character Along with Numbers !`,
      },
    },
    role: {
      type: String,
      required: true,
      enum: {
        values: ["ADMIN"],
        message: "Role {VALUE} Is Not Supported",
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["A", "I"],
        message: "{VALUE} Is Not Supported",
      },
    },
  },
  { collection: "Users" }
);

exports.User = model("User", UserSchema);
