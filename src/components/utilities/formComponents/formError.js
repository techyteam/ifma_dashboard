import React from 'react';
import { Text } from '@chakra-ui/react';


const FormError = ({ errors, touched, name }) => {
  const error = touched[name] && errors[name];
  return error ? (
    <Text
      mt='.5rem'
      fontSize={12}
      color='red.600'
      fontStyle='italic'
    >
      {error}
    </Text>
  ) : '';
};

export default FormError;
