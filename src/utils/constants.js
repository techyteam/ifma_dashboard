// String constants
export const TOKEN_KEY = 'token';

// APP ROUTES
export const routes = {
  login: '/login',
  signup: '/signup',
};

// initial states
export const reduxInitialStates = {
  userDetails: {
    data: {},
    error: {},
    processing: false,
  }
};

// API constants
export const baseURL = 'https://ifmanigeria.herokuapp.com/api';

// error messages
export const REQUIRED_VALUE_ERROR = 'Value is required';
export const INVALID_EMAIL_ERROR = 'Invalid email address';
export const INVALID_PASSWORD_ERROR = 'Password must be at least six character';

// Redux types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';