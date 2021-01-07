import React from 'react';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Input, Text } from '@chakra-ui/react';

import FormError from '../../utilities/formComponents/formError';
import PasswordInput from '../../utilities/formComponents/passwordInput';
import { emailValidator, passwordValidator } from '../../../utils/validations';
import userActions from '../../../store/actions/userActions';


const Wrapper = styled(Box)`
  & {
    display: flex;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  form {
    width: 100%;
    padding: 32px;
    max-width: 380px;
    border-radius: 8px;
    background: #F8F8F8;
  }

  form > [class*='input'] {
    margin-top: 16px;
  }

  input {
    background: #fff;
  }

  button {
    width: 100%;
    margin-top: 2rem;
  }
`;

const validationSchema = Yup.object().shape({
  email: emailValidator(true),
  password: passwordValidator,
});

const LoginPage = () => { 
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userDetails);

  const handleSubmission = (values) => {
    dispatch(userActions.login(values));
  };

  return (
    <Wrapper as='main'>
      <Text
        as='h1'
        mb='2rem'
        fontSize='2rem'
        fontWeight='bold'
      >
        Welcome Back!
      </Text>
      <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmission}
        >
          {
            ({ errors, touched, values, handleBlur, handleChange }) => {
              return (
                <Form>
                  <Input
                    type='email'
                    name='email'
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    placeholder='user@example.com'
                  />
                  <FormError
                    {...{
                      errors,
                      touched,
                      name: 'email'
                    }}
                  />
                  <PasswordInput
                    name='password'
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormError
                    {...{
                      errors,
                      touched,
                      name: 'password'
                    }}
                  />
                  <Button
                    bg='accent'
                    type='submit'
                    color='white'
                    disabled={userState.processing}
                  >
                    Login
                  </Button>
                </Form>
              );
            }
          }
        </Formik>
    </Wrapper>
  );
}

export default LoginPage;
