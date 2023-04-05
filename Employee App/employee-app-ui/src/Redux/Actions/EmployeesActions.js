import {
  GET_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "../../Constants/ReduxActionTypes";
import { useDispatch } from "react-redux";

const EmployeesActions = () => {

  const dispatch = useDispatch();
  const getEmployees = (payload) => {
    dispatch({
      type: GET_EMPLOYEES,
      payload: payload,
    });
  };
  const addEmployee = (payload) => {
    dispatch({
      type: ADD_EMPLOYEE,
      payload: payload,
    });
  };
  const updateEmployee = (payload) => {
    dispatch({
      type: UPDATE_EMPLOYEE,
      payload: payload,
    });
  };
  const deleteEmployee = (payload) => {
    dispatch({
      type: DELETE_EMPLOYEE,
      payload: payload,
    });
  };
  return Object.freeze({
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  });
};
export default EmployeesActions;
