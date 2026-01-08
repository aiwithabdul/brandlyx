import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  padding = 'lg',
  onClick,
  style
}: GlassCardProps) {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  return (
    <div
      className={`${hover ? 'glass-card' : 'glass-card-static'} ${paddingClasses[padding]} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}
