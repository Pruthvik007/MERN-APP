import { combineReducers } from "redux";
import EmployeesReducer from "./EmployeesReducer";
import UserReducer from "./UserReducer";
const RootReducer = combineReducers({
  employees: EmployeesReducer,
  user: UserReducer,
});
export default RootReducer;
