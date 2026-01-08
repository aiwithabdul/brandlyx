import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export default function Container({
    children,
    className = '',
    size = 'lg'
}: ContainerProps) {
    const sizeClasses = {
        sm: 'max-w-3xl',
        md: 'max-w-5xl',
        lg: 'max-w-7xl',
        xl: 'max-w-[1400px]',
        full: 'max-w-full'
    };

    return (
        <div className={`mx-auto px-6 sm:px-10 lg:px-12 ${sizeClasses[size]} ${className}`}>
            {children}
        </div>
    );
}
