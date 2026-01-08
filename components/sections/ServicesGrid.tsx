import React, { ReactNode } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    href: string;
    features?: string[];
}

interface ServicesGridProps {
    title?: string;
    subtitle?: string;
    services: Service[];
    showAll?: boolean;
}

const iconMap: Record<string, ReactNode> = {
    'digital-marketing': (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
    ),
    'seo': (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    ),
    'content-creation': (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
    ),
    'automation': (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
    ),
    'chatbot': (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
    ),
    'wordpress': (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
    ),
    'nextjs': (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    ),
};

export default function ServicesGrid({
    title = "Our Services",
    subtitle = "Comprehensive digital solutions to help your business thrive",
    services,
    showAll = true
}: ServicesGridProps) {
    return (
        <section className="section-padding relative">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] orb orb-accent opacity-20" />

            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="section-title mb-4">
                        {title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="gradient-text">{title.split(' ').slice(-1)}</span>
                    </h2>
                    <p className="section-subtitle">{subtitle}</p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <Link key={service.id} href={service.href}>
                            <GlassCard
                                className={`h-full group animate-slide-up stagger-${index + 1}`}
                                padding="lg"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                                    {iconMap[service.icon] || iconMap['digital-marketing']}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 mb-4">
                                    {service.description}
                                </p>

                                {/* Features Preview */}
                                {service.features && service.features.length > 0 && (
                                    <ul className="space-y-2 mb-4">
                                        {service.features.slice(0, 3).map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                                                <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Arrow */}
                                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all">
                                    Learn more
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </GlassCard>
                        </Link>
                    ))}
                </div>

                {/* View All Link */}
                {showAll && (
                    <div className="text-center mt-12">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                        >
                            View all services
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                )}
            </Container>
        </section>
    );
}
