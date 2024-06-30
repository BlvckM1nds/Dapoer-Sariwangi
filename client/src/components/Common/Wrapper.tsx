import { HTMLAttributes, ReactNode } from "react";

interface WrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
};

const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <section {...props}>{children}</section>
  );
};

export default Wrapper;