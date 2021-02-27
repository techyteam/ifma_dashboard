import { http } from "../config/axiosConfig";


export const loginRequest = (data) => {
  return http.post('/auth/signin', data);
};