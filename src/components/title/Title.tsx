import React, { HTMLAttributes } from 'react';
import { TitleWrapper } from './Title.style';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: any;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({children, as, ...props}) => {
  return (
    <TitleWrapper as={as} {...props} >{children}</TitleWrapper>
  );
}

export default Title;