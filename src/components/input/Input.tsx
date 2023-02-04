import React, { InputHTMLAttributes } from "react";
import { Wrapper } from "./Input.style";

const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
> = ({ ...props }, ref) => {
  return <Wrapper ref={ref} {...props} />;
};

export default React.forwardRef(Input);
