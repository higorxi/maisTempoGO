import React from 'react';

interface InputProps {
  id?: string;
  name?: string;
  type?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

export function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  required
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
    />
  );
}
