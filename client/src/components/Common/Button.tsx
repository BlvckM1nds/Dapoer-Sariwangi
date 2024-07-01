import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  className?: string
};

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`uppercase font-semibold tracking-wide text-white text-xs bg-accent hover:bg-accent-hover focus:ring-4 focus:ring-accent/35 rounded-md px-3.5 py-2 md:px-5 md:py-2.5 md:text-sm transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;