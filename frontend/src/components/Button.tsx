import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded ${
        disabled ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'
      } text-white`}
    >
      {label}
    </button>
  );
};

export default Button;
