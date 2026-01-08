'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import GlassButton from '../ui/GlassButton';

const categories = ['All', 'Web Development', 'SEO', 'Digital Marketing', 'Automation'];

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform Redesign',
        category: 'Web Development',
        description: 'Complete Next.js rebuild for a London-based fashion retailer, resulting in 3x faster load times.',
        image: '/portfolio/ecommerce.jpg',
        stats: { metric: '+180%', label: 'Conversion Rate' },
        tags: ['Next.js', 'React', 'Tailwind'],
    },
    {
        id: 2,
        title: 'National SEO Campaign',
        category: 'SEO',
        description: 'Comprehensive SEO strategy for a Manchester law firm targeting UK-wide visibility.',
        image: '/portfolio/seo-campaign.jpg',
        stats: { metric: '#1', label: 'Google Rankings' },
        tags: ['Technical SEO', 'Content', 'Link Building'],
    },
    {
        id: 3,
        title: 'Multi-Channel Marketing',
        category: 'Digital Marketing',
        description: 'Integrated digital marketing campaign for a UK SaaS startup.',
        image: '/portfolio/marketing.jpg',
        stats: { metric: '450%', label: 'ROI Achieved' },
        tags: ['PPC', 'Social Media', 'Email'],
    },
    {
        id: 4,
        title: 'AI Customer Service Bot',
        category: 'Automation',
        description: 'Custom chatbot development for a London financial services firm.',
        image: '/portfolio/chatbot.jpg',
        stats: { metric: '70%', label: 'Query Resolution' },
        tags: ['AI', 'NLP', 'Integration'],
    },
    {
        id: 5,
        title: 'Corporate Website',
        category: 'Web Development',
        description: 'Premium WordPress website for a professional services firm in the City.',
        image: '/portfolio/corporate.jpg',
        stats: { metric: '2.5s', label: 'Load Time' },
        tags: ['WordPress', 'Custom Theme', 'SEO'],
    },
    {
        id: 6,
        title: 'Local SEO Domination',
        category: 'SEO',
        description: 'Local SEO campaign for a chain of restaurants across Greater London.',
        image: '/portfolio/local-seo.jpg',
        stats: { metric: '12x', label: 'More Leads' },
        tags: ['Local SEO', 'GMB', 'Reviews'],
    },
];

export default function PortfolioSection() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

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
        <section ref={sectionRef} id="portfolio" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-background opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] orb orb-secondary opacity-10" />

            <Container className="relative z-10">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-block px-4 py-2 rounded-full glass-card-static text-cyan-400 text-sm font-medium mb-6">
                        Our Work
                    </span>
                    <h2 className="section-title mb-6">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Discover how we&apos;ve helped UK businesses achieve remarkable digital transformations.
                    </p>
                </div>

                {/* Category Filter */}
                <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25'
                                : 'glass-button hover:bg-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group glass-card overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${300 + index * 100}ms` }}
                        >
                            {/* Image Placeholder */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-center w-full">
                                        <div className="text-3xl font-bold text-cyan-400">{project.stats.metric}</div>
                                        <div className="text-sm text-slate-300">{project.stats.label}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="text-xs text-cyan-400 font-medium mb-2">{project.category}</div>
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs rounded-full bg-white/5 text-slate-400 border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <GlassButton href="/portfolio" variant="glass" size="lg">
                        View All Projects
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </GlassButton>
                </div>
            </Container>
        </section>
    );
}
