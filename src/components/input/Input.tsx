import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Wrapper } from './Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<any>;
}

const Input: React.FC<InputProps> = ({name, register, ...props}) => {
  return <Wrapper {...props} {...register(name)} />;
}

export default Input;