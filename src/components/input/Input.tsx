import React, { InputHTMLAttributes } from 'react';
import { Wrapper } from './Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({...props}) => {
  return (
    <Wrapper {...props} />
  );
}

export default Input;