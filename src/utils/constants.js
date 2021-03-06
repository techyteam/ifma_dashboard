// String constants
export const TOKEN_KEY = 'token';

// APP ROUTES
export const routes = {
  home: '/',
  blog: '/blog',
  login: '/login',
  signup: '/signup',
  aboutUs: '/about',
  events: '/events',
  contactUs: '/contact',
  singleBlog: '/blog-single',
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
export const baseURL = 'https://ifmanigeria.herokuapp.com/api/v1';

// error messages
export const REQUIRED_VALUE_ERROR = 'Value is required';
export const INVALID_EMAIL_ERROR = 'Invalid email address';
export const INVALID_PASSWORD_ERROR = 'Password must be at least eight characters long';

// Redux types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';