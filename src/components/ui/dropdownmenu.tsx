import React, { useState, ReactNode } from 'react';

interface DropdownMenuProps {
  trigger: ReactNode;
  children: ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative inline-block text-left">
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-full max-w-[250px] bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <div className="py-1" onClick={closeDropdown}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

interface DropdownMenuItemProps {
  onClick: () => void;
  children: ReactNode;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
    >
      {children}
    </button>
  );
};
