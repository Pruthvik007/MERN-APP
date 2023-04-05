var { model, Schema } = require("mongoose");
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    status: { type: String, required: true },
  },
  { collection: "Users" }
);

exports.User = model("User", UserSchema);
