import { LOGIN, LOGOUT } from "../../Constants/ReduxActionTypes";
import { useDispatch } from "react-redux";
const UserActions = () => {
  const dispatch = useDispatch();
  const login = (payload) => {
    dispatch({
      type: LOGIN,
      payload: payload,
    });
  };
  const logout = () => {
    dispatch({
      type: LOGOUT,
      payload: null,
    });
  };
  return Object.freeze({ login, logout });
};
export default UserActions;
