import * as Yup from 'yup';
import {
  INVALID_EMAIL_ERROR,
  INVALID_PASSWORD_ERROR,
  REQUIRED_VALUE_ERROR,
} from "./constants";


export const emailValidator = (required) => Yup
  .string().email(INVALID_EMAIL_ERROR)[required ? 'required' : 'notRequired'](REQUIRED_VALUE_ERROR);
export const passwordValidator = Yup
  .string().min(8, INVALID_PASSWORD_ERROR).required(REQUIRED_VALUE_ERROR);