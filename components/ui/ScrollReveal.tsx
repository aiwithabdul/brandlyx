'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
    once?: boolean;
}

const animations = {
    'fade-up': {
        initial: 'opacity-0 translate-y-8',
        animate: 'opacity-100 translate-y-0',
    },
    'fade-down': {
        initial: 'opacity-0 -translate-y-8',
        animate: 'opacity-100 translate-y-0',
    },
    'fade-left': {
        initial: 'opacity-0 translate-x-8',
        animate: 'opacity-100 translate-x-0',
    },
    'fade-right': {
        initial: 'opacity-0 -translate-x-8',
        animate: 'opacity-100 translate-x-0',
    },
    'zoom-in': {
        initial: 'opacity-0 scale-95',
        animate: 'opacity-100 scale-100',
    },
    'zoom-out': {
        initial: 'opacity-0 scale-105',
        animate: 'opacity-100 scale-100',
    },
};

export default function ScrollReveal({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 600,
    threshold = 0.1,
    className = '',
    once = true,
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (once) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!once) {
                        setIsVisible(false);
                    }
                });
            },
            { threshold }
        );

        // Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) {
            setIsVisible(true);
            return;
        }

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, once]);

    const animationConfig = animations[animation];

    return (
        <div
            ref={ref}
            className={`transition-all transform ${className} ${isVisible ? animationConfig.animate : animationConfig.initial
                }`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            {children}
        </div>
    );
}
