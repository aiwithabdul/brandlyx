import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

export const metadata: Metadata = {
    title: 'Our Services | Digital Marketing, SEO, Web Development',
    description: 'Explore Brandlyx\'s comprehensive digital services: SEO, Digital Marketing, Content Creation, Automation, Chatbots, WordPress, and Next.js development for UK businesses.',
    keywords: ['digital marketing services', 'SEO services UK', 'web development London', 'automation services', 'chatbot development'],
};

const services = [
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'Data-driven marketing strategies that drive traffic, engagement, and conversions for UK businesses.',
        longDescription: 'Our comprehensive digital marketing services combine PPC advertising, social media marketing, and email campaigns to maximize your ROI and grow your customer base.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
        ),
        features: ['PPC Advertising', 'Social Media Marketing', 'Email Campaigns', 'Marketing Automation', 'Analytics & Reporting'],
        color: 'from-pink-500 to-rose-500',
    },
    {
        id: 'seo',
        title: 'SEO Services',
        description: 'Dominate Google search results with our proven SEO strategies tailored for the UK market.',
        longDescription: 'Our SEO experts use cutting-edge techniques to improve your visibility on search engines, driving organic traffic and qualified leads to your business.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        features: ['Technical SEO Audits', 'Local SEO', 'Link Building', 'Keyword Research', 'Content Optimization'],
        color: 'from-green-500 to-emerald-500',
    },
    {
        id: 'content-creation',
        title: 'Content Creation',
        description: 'Compelling content that tells your story and engages your target audience.',
        longDescription: 'From blog posts and articles to videos and infographics, our content team creates assets that resonate with your audience and support your SEO goals.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        features: ['Blog Writing', 'Video Production', 'Copywriting', 'Infographics', 'Social Media Content'],
        color: 'from-purple-500 to-violet-500',
    },
    {
        id: 'automation',
        title: 'Automation',
        description: 'Streamline your workflows with intelligent automation solutions that save time and reduce costs.',
        longDescription: 'We implement smart automation solutions that handle repetitive tasks, integrate your systems, and free your team to focus on high-value activities.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        features: ['Workflow Automation', 'CRM Integration', 'Lead Scoring', 'Email Sequences', 'Data Synchronization'],
        color: 'from-orange-500 to-amber-500',
    },
    {
        id: 'chatbot-development',
        title: 'Chatbot Development',
        description: 'AI-powered chatbots that provide 24/7 customer support and qualify leads automatically.',
        longDescription: 'Our custom chatbots use natural language processing to engage visitors, answer questions, and qualify leads around the clock.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        features: ['AI Chatbots', 'Live Chat Integration', 'Lead Qualification', 'Multi-platform Support', 'Analytics Dashboard'],
        color: 'from-blue-500 to-cyan-500',
    },
    {
        id: 'wordpress',
        title: 'WordPress Websites',
        description: 'Custom WordPress websites that are fast, secure, and easy to manage.',
        longDescription: 'We build stunning WordPress websites with custom themes, powerful plugins, and optimized performance that help your business stand out.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        features: ['Custom Themes', 'E-commerce', 'Speed Optimization', 'Security Hardening', 'Ongoing Maintenance'],
        color: 'from-sky-500 to-blue-500',
    },
    {
        id: 'nextjs-react',
        title: 'Next.js / React',
        description: 'Modern, high-performance web applications built with cutting-edge technologies.',
        longDescription: 'We develop blazing-fast web applications using Next.js and React that deliver exceptional user experiences and seamlessly integrate with your backend systems.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        features: ['App Development', 'API Integration', 'Headless CMS', 'Performance Optimization', 'Full-Stack Solutions'],
        color: 'from-indigo-500 to-violet-500',
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-44 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 grid-background" />
                <div className="absolute top-20 left-10 w-[400px] h-[400px] orb orb-primary animate-pulse-glow" />
                <div className="absolute bottom-20 right-10 w-[300px] h-[300px] orb orb-accent animate-pulse-glow" style={{ animationDelay: '2s' }} />

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 rounded-full glass-card-static text-cyan-400 text-sm font-medium mb-6 animate-slide-up">
                            What We Offer
                        </span>
                        <h1 className="hero-title mb-6 animate-slide-up stagger-1">
                            Our <span className="gradient-text">Services</span>
                        </h1>
                        <p className="section-subtitle max-w-2xl mx-auto animate-slide-up stagger-2">
                            Comprehensive digital solutions designed to help UK businesses thrive in the digital age.
                            From SEO to custom web development, we&apos;ve got you covered.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <Link key={service.id} href={`/services/${service.id}`}>
                                <GlassCard
                                    className={`h-full group animate-slide-up`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    padding="lg"
                                >
                                    <div className="flex flex-col h-full">
                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                            {service.icon}
                                        </div>

                                        {/* Content */}
                                        <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                            {service.title}
                                        </h2>
                                        <p className="text-slate-400 mb-6 flex-grow">
                                            {service.longDescription}
                                        </p>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {service.features.slice(0, 3).map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-slate-400 border border-white/10"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                            {service.features.length > 3 && (
                                                <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-cyan-400 border border-cyan-400/20">
                                                    +{service.features.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                                            Learn more
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/50 via-transparent to-indigo-950/50" />

                <Container className="relative z-10">
                    <div className="glass-card-static p-12 rounded-3xl text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Not Sure Which Service You Need?
                        </h2>
                        <p className="text-slate-400 mb-8">
                            Book a free consultation with our experts. We&apos;ll analyze your business needs and recommend
                            the best solutions to achieve your goals.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <GlassButton href="/contact" variant="accent" size="lg">
                                Book Free Consultation
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </GlassButton>
                            <GlassButton href="tel:+442012345678" variant="glass" size="lg">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Us
                            </GlassButton>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
