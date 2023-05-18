import { ACTION } from "../../Constants/ReduxActionTypes";
import { useDispatch } from "react-redux";
const UserActions = () => {
  const dispatch = useDispatch();
  const login = (payload) => {
    dispatch({
      type: ACTION.LOGIN,
      payload: payload,
    });
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    dispatch({
      type: ACTION.LOGOUT,
      payload: null,
    });
  };
  return Object.freeze({ login, logout });
};
export default UserActions;
