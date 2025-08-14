import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'slideDown';
  delay?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  threshold = 0.1
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeLeft':
        return 'animate-fade-in-left';
      case 'fadeRight':
        return 'animate-fade-in-right';
      case 'scaleIn':
        return 'animate-scale-in';
      case 'slideDown':
        return 'animate-slide-down';
      default:
        return 'animate-fade-in-up';
    }
  };

  const getDelayClass = () => {
    if (delay === 100) return 'animate-delay-100';
    if (delay === 200) return 'animate-delay-200';
    if (delay === 300) return 'animate-delay-300';
    if (delay === 400) return 'animate-delay-400';
    if (delay === 500) return 'animate-delay-500';
    return '';
  };

  return (
    <div
      ref={elementRef}
      className={`
        ${className}
        ${isVisible ? getAnimationClass() : 'opacity-0'}
        ${getDelayClass()}
      `}
      style={{
        animationDelay: delay ? `${delay}ms` : undefined
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;