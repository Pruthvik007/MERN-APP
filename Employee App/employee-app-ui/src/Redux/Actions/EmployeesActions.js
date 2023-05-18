import { ACTION } from "../../Constants/ReduxActionTypes";
import { useDispatch } from "react-redux";

const EmployeesActions = () => {
  const dispatch = useDispatch();
  const getEmployees = (payload) => {
    dispatch({
      type: ACTION.GET_EMPLOYEES,
      payload: payload,
    });
  };
  const addEmployee = (payload) => {
    dispatch({
      type: ACTION.ADD_EMPLOYEE,
      payload: payload,
    });
  };
  const updateEmployee = (payload) => {
    dispatch({
      type: ACTION.UPDATE_EMPLOYEE,
      payload: payload,
    });
  };
  const deleteEmployee = (payload) => {
    dispatch({
      type: ACTION.DELETE_EMPLOYEE,
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
