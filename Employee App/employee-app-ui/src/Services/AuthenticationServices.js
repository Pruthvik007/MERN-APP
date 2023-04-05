import { fetch } from "../Utils/Axios";
import Validator from "../Helpers/Validator";
import UserActions from "../Redux/Actions/UserActions";
const AuthenticationServices = () => {
  const ERROR_MESSAGE = "Unable to Authenticate";
  const userActions = UserActions();
  const validator = Validator();
  const login = async (user) => {
    return fetch("login","POST",user)
      .then((response) => {
        if (validator.isSuccess(response)) {
          userActions.login(response.data);
          return null;
        } else {
          return response.message;
        }
      })
      .catch((error) => {
        console.log(error);
        return ERROR_MESSAGE;
      });
  };
  const signUp = async (user) => {
    return fetch("signup","POST",user)
      .then((response) => {
        if (validator.isSuccess(response)) {
          return null;
        } else {
          return response.message;
        }
      })
      .catch((error) => {
        console.log(error);
        return ERROR_MESSAGE;
      });
  };
  return Object.freeze({ login, signUp });
};

export default AuthenticationServices;
