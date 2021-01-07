import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { routes } from './utils/constants';
import chakraTheme from './config/chakraTheme';
import LoginPage from './components/pages/login';
import SignupPage from './components/pages/signup';
import { CookiesProvider } from 'react-cookie';


const Routes = () => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <CookiesProvider />
      <BrowserRouter>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signup} component={SignupPage} />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default Routes;
