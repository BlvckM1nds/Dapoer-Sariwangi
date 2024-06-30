import { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode,
  className?: string
};

const Container = ({ children, className = "", ...props }: ContainerProps) => {
  return (
    <div className={`container mx-auto ${className}`} {...props}>{children}</div>
  );
};

export default Container;