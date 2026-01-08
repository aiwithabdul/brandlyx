'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Mitchell',
        role: 'Marketing Director',
        company: 'TechFlow London',
        location: 'London',
        image: '/testimonials/sarah.jpg',
        quote: 'Brandlyx transformed our online presence completely. Our organic traffic increased by 400% in just six months. Their SEO expertise is unmatched in the UK market.',
        rating: 5,
    },
    {
        id: 2,
        name: 'James Richardson',
        role: 'CEO',
        company: 'Northern Digital Solutions',
        location: 'Manchester',
        image: '/testimonials/james.jpg',
        quote: 'The Next.js website they built for us is lightning fast and has significantly improved our conversion rates. Professional team, exceptional results.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Emma Thompson',
        role: 'Operations Manager',
        company: 'Swift Logistics',
        location: 'Birmingham',
        image: '/testimonials/emma.jpg',
        quote: 'The automation solutions Brandlyx implemented saved us 30+ hours per week. Their chatbot handles 70% of our customer queries automatically.',
        rating: 5,
    },
    {
        id: 4,
        name: 'David Chen',
        role: 'Founder',
        company: 'HealthTech Innovations',
        location: 'London',
        image: '/testimonials/david.jpg',
        quote: 'From content strategy to execution, Brandlyx delivered beyond our expectations. Our thought leadership content now drives 60% of our qualified leads.',
        rating: 5,
    },
    {
        id: 5,
        name: 'Rachel Foster',
        role: 'E-commerce Director',
        company: 'StyleHub UK',
        location: 'Manchester',
        image: '/testimonials/rachel.jpg',
        quote: 'The digital marketing campaign they ran exceeded every KPI we set. ROI of 520% in the first quarter. Simply outstanding work.',
        rating: 5,
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const sectionRef = useRef<HTMLElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

    useEffect(() => {
        if (isAutoPlaying && isVisible) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            }, 5000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isAutoPlaying, isVisible]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section ref={sectionRef} id="testimonials" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] orb orb-accent opacity-15" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] orb orb-primary opacity-15" />

            <Container className="relative z-10">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-block px-4 py-2 rounded-full glass-card-static text-cyan-400 text-sm font-medium mb-6">
                        Client Success Stories
                    </span>
                    <h2 className="section-title mb-6">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                    <p className="section-subtitle">
                        Don&apos;t just take our word for it. Here&apos;s what business leaders across the UK have to say about working with Brandlyx.
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative">
                        {/* Main Testimonial Card */}
                        <div className="glass-card-static p-8 md:p-12 rounded-3xl relative overflow-hidden">
                            {/* Quote Icon */}
                            <svg className="absolute top-8 left-8 w-12 h-12 text-indigo-500/20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>

                            {/* Content */}
                            <div className="relative z-10">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className={`transition-all duration-500 ${index === currentIndex
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 translate-x-8 absolute inset-0 pointer-events-none'
                                            }`}
                                    >
                                        {/* Rating */}
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </blockquote>

                                        {/* Author */}
                                        <div className="flex items-center gap-4">
                                            {/* Avatar Placeholder */}
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div className="text-white font-semibold">{testimonial.name}</div>
                                                <div className="text-slate-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                                                <div className="flex items-center gap-1 text-cyan-400 text-xs mt-1">
                                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {testimonial.location}, UK
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-button flex items-center justify-center hover:bg-white/10 transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-button flex items-center justify-center hover:bg-white/10 transition-colors"
                                aria-label="Next testimonial"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`transition-all duration-300 rounded-full ${index === currentIndex
                                            ? 'w-8 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500'
                                            : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className={`mt-16 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-sm text-slate-500 mb-6">Trusted by 50+ UK businesses including</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
                        {['TechCorp UK', 'Innovation Labs', 'Growth Partners', 'Digital First', 'Scale Ventures'].map((brand) => (
                            <span key={brand} className="text-lg md:text-xl font-bold text-slate-400">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
