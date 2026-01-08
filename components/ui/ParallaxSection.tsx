'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
    children: ReactNode;
    speed?: number; // 0.1 = slow, 0.5 = medium, 1 = same as scroll
    className?: string;
}

export default function ParallaxSection({
    children,
    speed = 0.5,
    className = ''
}: ParallaxSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const scrolled = window.scrollY;
                const rate = scrolled * speed;
                sectionRef.current.style.transform = `translateY(${rate}px)`;
            }
        };

        // Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (!mediaQuery.matches) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div ref={sectionRef} className={className}>
            {children}
        </div>
    );
}
