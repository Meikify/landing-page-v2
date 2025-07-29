import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GradientButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  size?: 'sm' | 'lg' | 'default';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  showSparkles?: boolean;
  showArrow?: boolean;
  loading?: boolean;
}

const gradientVariants = {
  primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white',
  secondary: 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white',
  outline: 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white bg-transparent',
};

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  size = 'lg',
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  showSparkles = false,
  showArrow = false,
  loading = false,
  ...props
}) => {
  const baseClasses = 'font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <Button
      type={type}
      size={size}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        baseClasses,
        sizeClasses[size],
        gradientVariants[variant],
        className
      )}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          Enviando...
        </div>
      ) : (
        <>
          {showSparkles && <Sparkles className="w-5 h-5" />}
          <span>{children}</span>
          {showArrow && <ArrowRight className="w-5 h-5" />}
        </>
      )}
    </Button>
  );
};