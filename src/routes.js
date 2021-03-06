import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { routes } from './utils/constants';
import chakraTheme from './config/chakraTheme';
import HomePage from './components/pages/home';
import LoginPage from './components/pages/login';
import SignupPage from './components/pages/signup';
import AboutUsPage from './components/pages/about-us';
import EventsPage from './components/pages/events';
import ContactUsPage from './components/pages/contact-us';
import BlogsPage from './components/pages/blogs';
import SingleBlogPage from './components/pages/blogs/single-blog';


const Routes = () => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <BrowserRouter>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signup} component={SignupPage} />
        <Route exact path={routes.aboutUs} component={AboutUsPage} />
        <Route exact path={routes.events} component={EventsPage} />
        <Route exact path={routes.contactUs} component={ContactUsPage} />
        <Route exact path={routes.blog} component={BlogsPage} />
        <Route exact path={routes.singleBlog} component={SingleBlogPage} />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default Routes;
