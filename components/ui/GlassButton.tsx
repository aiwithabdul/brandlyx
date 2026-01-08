import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonBaseProps {
    children: ReactNode;
    variant?: 'primary' | 'accent' | 'glass' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
}

interface ButtonAsButtonProps extends ButtonBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
    href?: never;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
    href: string;
    external?: boolean;
}

type GlassButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function GlassButton({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon,
    iconPosition = 'right',
    ...props
}: GlassButtonProps) {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 cursor-pointer';

    const variantClasses = {
        primary: 'btn-primary',
        accent: 'btn-accent',
        glass: 'glass-button',
        outline: 'border-2 border-white/20 hover:border-white/40 hover:bg-white/5 rounded-xl'
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-xl'
    };

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    const content = (
        <>
            {icon && iconPosition === 'left' && <span>{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span>{icon}</span>}
        </>
    );

    if ('href' in props && props.href) {
        const { href, external, ...rest } = props as ButtonAsLinkProps;
        if (external) {
            return (
                <a
                    href={href}
                    className={buttonClasses}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...rest as any}
                >
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={buttonClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button className={buttonClasses} {...props as ButtonAsButtonProps}>
            {content}
        </button>
    );
}
