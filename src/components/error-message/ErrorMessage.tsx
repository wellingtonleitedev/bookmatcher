import React from "react";
import { Span } from "./ErrorMessage.style";

interface ErrorMessageProps {
  children?: string | JSX.Element;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <Span>{children}</Span>;
};

export default ErrorMessage;
