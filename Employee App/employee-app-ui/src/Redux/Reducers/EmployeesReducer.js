import { ACTION } from "../../Constants/ReduxActionTypes";
const EmployeesReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION.GET_EMPLOYEES:
      return action.payload;
    case ACTION.ADD_EMPLOYEE:
      return [...state, action.payload];
    case ACTION.DELETE_EMPLOYEE:
      return state.filter((employee) => employee._id !== action.payload);
    case ACTION.UPDATE_EMPLOYEE:
      return state.map((employee) =>
        employee._id === action.payload._id ? action.payload : employee
      );
    default:
      return state;
  }
};

export default EmployeesReducer;
