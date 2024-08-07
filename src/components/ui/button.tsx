import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'primary' | 'main';
  className?: string;
}

const buttonVariants = {
  default: 'bg-blue-500 text-white hover:bg-blue-600',
  outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
  primary: 'bg-green-500 text-white hover:bg-green-600',
  main: 'bg-black text-white border border-black hover:bg-white hover:text-black hover:border-black'
};

const Button: React.FC<ButtonProps> = ({ variant = 'default', className, ...props }) => {
  const variantClasses = buttonVariants[variant] || buttonVariants.default;
  
  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors ${variantClasses} ${className}`}
      {...props}
    />
  );
}

export { Button };
