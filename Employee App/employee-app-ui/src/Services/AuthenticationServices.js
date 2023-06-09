import { fetchApi } from "../Utils/Fetch";
import Validator from "../Helpers/Validator";
import UserActions from "../Redux/Actions/UserActions";
import bcrypt from "bcryptjs";
const AuthenticationServices = () => {
  const ERROR_MESSAGE = "Unable to Authenticate";
  const userActions = UserActions();
  const validator = Validator();
  const login = async (user) => {
    return fetchApi("login", "POST", user)
      .then((response) => {
        if (validator.isSuccess(response)) {
          localStorage.setItem("accessToken", response.accessToken);
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
    user.password = bcrypt.hashSync(user.password, 10);
    return fetchApi("signup", "POST", user)
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
