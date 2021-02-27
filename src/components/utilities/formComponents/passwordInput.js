import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";


const PasswordInput = (props) => {
  const [visible, setVisible] = useState(false);
  const AppendedIcon = visible ? BsEyeSlashFill : BsEyeFill;

  return (
    <InputGroup>
      <Input
        {...props}
        placeholder='Password'
        type={visible ? 'text': 'password'}
      />
      <InputRightAddon>
        <AppendedIcon
          onClick={() => setVisible(!visible)}
        />
      </InputRightAddon>
    </InputGroup>
  );
};

export default PasswordInput;
