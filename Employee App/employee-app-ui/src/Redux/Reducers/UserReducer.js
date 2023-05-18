import { ACTION } from "../../Constants/ReduxActionTypes";

const UserReducer = (state = null, action) => {
  switch (action.type) {
    case ACTION.LOGIN:
      return action.payload;
    case ACTION.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default UserReducer;
