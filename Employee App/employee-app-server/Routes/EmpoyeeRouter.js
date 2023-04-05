var express = require("express");
var router = express.Router();
const employeeController = require("../Controllers/EmployeeController");

router.get("/", employeeController.getEmployees)

.get("/:id", employeeController.getEmployee)

.post("/", employeeController.createEmployee)

.put("/", employeeController.updateEmployee)

.patch("/:id", employeeController.replaceEmployee)

.delete("/:id", employeeController.deleteEmployee)

exports.router = router;
