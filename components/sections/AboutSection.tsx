'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import GlassButton from '../ui/GlassButton';

const stats = [
    { value: 150, suffix: '+', label: 'Projects Delivered' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 50, suffix: '+', label: 'UK Businesses Served' },
    { value: 8, suffix: '+', label: 'Years Experience' },
];

const values = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Innovation First',
        description: 'We leverage cutting-edge technology to deliver solutions that keep you ahead of the competition.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Client Partnership',
        description: 'We work alongside you, not just for you. Your success is our success.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: 'Quality Assured',
        description: 'Every project undergoes rigorous testing and quality checks before delivery.',
    },
];

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 2000;
                    const steps = 60;
                    const increment = value / steps;
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= value) {
                            setCount(value);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {count}{suffix}
            </div>
            <div className="text-slate-400 text-sm">{label}</div>
        </div>
    );
}

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <section ref={sectionRef} id="about" className="section-padding relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] orb orb-primary opacity-20" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] orb orb-accent opacity-15" />

            <Container>
                {/* Section Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-block px-4 py-2 rounded-full glass-card-static text-cyan-400 text-sm font-medium mb-6">
                        About Brandlyx
                    </span>
                    <h2 className="section-title mb-6">
                        Transforming UK Businesses with{' '}
                        <span className="gradient-text">Digital Excellence</span>
                    </h2>
                    <p className="section-subtitle">
                        Based in the heart of the United Kingdom, we help businesses across London, Manchester, 
                        and beyond achieve digital transformation through innovative solutions and data-driven strategies.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Column - Story */}
                    <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Your Growth Partners in the Digital Age
                        </h3>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                At Brandlyx, we believe every business deserves access to world-class digital 
                                solutions. Founded with a mission to democratise digital excellence, we&apos;ve 
                                grown from a small team of passionate developers to a full-service digital 
                                agency serving clients across the UK.
                            </p>
                            <p>
                                From SEO and content creation to custom web development and AI-powered 
                                chatbots, we offer comprehensive solutions tailored to your unique needs. 
                                Our team combines technical expertise with creative thinking to deliver 
                                results that exceed expectations.
                            </p>
                            <p>
                                Whether you&apos;re a startup looking to make your mark or an established 
                                enterprise seeking digital transformation, we&apos;re here to guide you 
                                every step of the way.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <GlassButton href="/about" variant="primary">
                                Learn More About Us
                            </GlassButton>
                            <GlassButton href="/contact" variant="glass">
                                Talk to Our Team
                            </GlassButton>
                        </div>
                    </div>

                    {/* Right Column - Values */}
                    <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className="glass-card p-6 flex gap-5 group"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {value.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Row */}
                <div className={`glass-card-static rounded-2xl p-8 md:p-12 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <AnimatedCounter
                                key={stat.label}
                                value={stat.value}
                                suffix={stat.suffix}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
