import {
  GET_EMPLOYEES,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "../../Constants/ReduxActionTypes";
const EmployeesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return action.payload;
    case ADD_EMPLOYEE:
      return [...state, action.payload];
    case DELETE_EMPLOYEE:
      return state.filter((employee) => employee._id !== action.payload);
    case UPDATE_EMPLOYEE:
      return state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );
    default:
      return state;
  }
};

export default EmployeesReducer;
