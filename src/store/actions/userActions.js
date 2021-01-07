import { LOGIN_REQUEST } from "../../utils/constants";


const login = (payload) => ({ type: LOGIN_REQUEST, payload });

const userActions = {
  login,
};

export default userActions;
