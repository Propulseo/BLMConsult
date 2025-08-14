import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-gray-800';
      case 'outline':
        return 'border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white';
      default:
        return 'bg-blue-600 text-white hover:bg-blue-700';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 sm:px-4 py-2 text-xs sm:text-sm min-h-8';
      case 'lg':
        return 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-h-12';
      default:
        return 'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base min-h-10';
    }
  };

  return (
    <button
      className={`
        relative
        inline-flex
        items-center
        justify-center
        font-medium
        rounded-lg
        transition-all
        duration-300
        transform
        hover:scale-105
        hover:shadow-lg
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:transform-none
        focus:outline-none
        focus:ring-4
        focus:ring-blue-100
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <span className={`flex items-center space-x-2 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {icon && iconPosition === 'left' && (
          <span className="transition-transform duration-200 group-hover:scale-110">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
};

export default AnimatedButton;