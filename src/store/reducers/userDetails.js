import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, reduxInitialStates } from "../../utils/constants";


const userDetailsReducer = (state = reduxInitialStates.userDetails, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST: return { ...state, processing: true };
    case LOGIN_SUCCESS: console.log({payload}); return { ...state, processing: false };
    case LOGIN_FAILURE: console.log({payload}); return { ...state, processing: false };
    default: return state;
  }
}

export default userDetailsReducer;
