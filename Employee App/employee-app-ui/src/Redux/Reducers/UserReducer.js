import { LOGIN, LOGOUT } from "../../Constants/ReduxActionTypes";

const UserReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

export default UserReducer;
