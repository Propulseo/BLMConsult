import React, { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  hover = true,
  clickable = false,
  onClick
}) => {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-lg
        border
        border-gray-100
        transition-all
        duration-300
        ${hover ? 'hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2' : ''}
        ${clickable ? 'cursor-pointer hover:scale-102 sm:hover:scale-105' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;