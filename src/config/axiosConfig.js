import Axios from "axios";

import { baseURL, TOKEN_KEY } from "../utils/constants";
import cookies from "react-cookies";


export const http = Axios.create({
  baseURL,
  headers: {
    Authorization: cookies.load(TOKEN_KEY),
  }
});