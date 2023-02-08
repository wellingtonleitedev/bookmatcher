import React, { InputHTMLAttributes } from "react";
import { FieldErrors } from "react-hook-form";
import ErrorMessage from "../error-message/ErrorMessage";
import { Wrapper } from "./Input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  errors: FieldErrors<Record<string, unknown>>;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, errors, ...props },
  ref
) => (
  <>
    <Wrapper ref={ref} name={name} {...props} />
    {!!errors[name]?.message && (
      <ErrorMessage>{errors[name]?.message}</ErrorMessage>
    )}
  </>
);

export default React.forwardRef(Input);
