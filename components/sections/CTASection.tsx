'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import GlassButton from '../ui/GlassButton';

export default function CTASection() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            setMousePosition({
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100,
            });
        }
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="py-32 relative overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-slate-950 to-indigo-950" />

            {/* Mouse-following gradient */}
            <div
                className="absolute inset-0 opacity-30 transition-all duration-300 ease-out"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgb(99 102 241 / 0.4) 0%, transparent 50%)`,
                }}
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 grid-background opacity-30" />

            {/* Decorative Orbs */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] orb orb-accent opacity-20 animate-pulse-glow" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] orb orb-primary opacity-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />

            <Container className="relative z-10">
                <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-static mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                        </span>
                        <span className="text-sm text-slate-300">Limited Slots Available for Q1 2026</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Ready to Dominate Your{' '}
                        <span className="relative">
                            <span className="gradient-text">Digital Market</span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                                <path
                                    d="M1 5.5C47 2.5 153 2.5 199 5.5"
                                    stroke="url(#underline-gradient)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="underline-gradient" x1="1" y1="4" x2="199" y2="4">
                                        <stop stopColor="#6366f1" />
                                        <stop offset="0.5" stopColor="#06b6d4" />
                                        <stop offset="1" stopColor="#8b5cf6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        ?
                    </h2>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Join 50+ UK businesses who&apos;ve transformed their online presence with Brandlyx.
                        Book your free strategy call today.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <GlassButton href="/contact" variant="accent" size="lg">
                            Book Free Strategy Call
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </GlassButton>
                        <GlassButton href="/services" variant="glass" size="lg">
                            Explore Services
                        </GlassButton>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 text-sm">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Free Consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>No Obligation Quote</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>24hr Response</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
