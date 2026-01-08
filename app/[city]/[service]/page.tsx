import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';
import JsonLd from '@/components/seo/JsonLd';

// City data (simplified for this route)
const cities: Record<string, { name: string; country: string }> = {
    'london': { name: 'London', country: 'United Kingdom' },
    'manchester': { name: 'Manchester', country: 'United Kingdom' },
};

// Service data (from previous definition)
const services: Record<string, {
    title: string;
    tagline: string;
    description: string;
    longDescription: string[];
    features: { title: string; description: string }[];
    benefits: string[];
    pricing: { name: string; price: string; features: string[]; popular?: boolean }[];
}> = {
    'digital-marketing': {
        title: 'Digital Marketing',
        tagline: 'Scale Your Business with Expert Digital Marketing',
        description: 'Professional digital marketing services tailored for your local market.',
        longDescription: [
            'Looking for expert digital marketing that actually delivers results? We help businesses stand out and grow their online presence with data-driven strategies.',
            'Our team combines local market knowledge with advanced marketing techniques to ensure your business reaches the right audience at the right time.',
        ],
        features: [
            { title: 'PPC Advertising', description: 'Targeted ads that drive immediate traffic and leads.' },
            { title: 'Social Media Management', description: 'Be where your customers are with professional social profiles.' },
            { title: 'Email Marketing', description: 'Nurture leads and keep your customers coming back.' },
        ],
        benefits: ['Increased Brand Visibility', 'Higher Conversion Rates', 'Measurable Growth', 'Expert Strategy'],
        pricing: [
            { name: 'Starter', price: '£999', features: ['Google Ads', 'Monthly Reports', 'Support'] },
            { name: 'Growth', price: '£1,999', features: ['Social Ads', 'Strategy', 'Email Marketing'], popular: true },
            { name: 'Enterprise', price: 'Custom', features: ['All Channels', 'Dedicated Manager', 'Strategy'] },
        ],
    },
    'seo': {
        title: 'SEO Services',
        tagline: 'Rank #1 on Google and Drive Traffic',
        description: 'Proven SEO strategies that improve your visibility and drive organic traffic.',
        longDescription: [
            'SEO is the most cost-effective way to grow your business long-term. We specialize in technical, on-page, and local SEO that gets you noticed.',
            'Our approach is transparent and results-oriented, focusing on target keywords that have high intent and high search volume in your area.',
        ],
        features: [
            { title: 'Local SEO', description: 'Dominate Google Maps and local search results.' },
            { title: 'Technical Audit', description: 'Fix the hidden issues holding your site back.' },
            { title: 'Link Building', description: 'Build authority with high-quality UK backlinks.' },
        ],
        benefits: ['Organic Traffic Growth', 'Better Rankings', 'Long-term ROI', 'Domain Authority'],
        pricing: [
            { name: 'Local', price: '£799', features: ['GMB Optimization', 'Local Citations', 'Reports'] },
            { name: 'Growth', price: '£1,499', features: ['Technical SEO', 'Content Strategy', 'Backlinks'], popular: true },
            { name: 'National', price: '£2,999+', features: ['Full Technical', 'Advanced Link Building', 'Keywords'] },
        ],
    },
    'content-creation': {
        title: 'Content Creation',
        tagline: 'Compelling Content That Tells Your Story',
        description: 'Professional content services that engage your audience and build trust.',
        longDescription: [
            'Content is king, and we help you wear the crown. From blogs to video scripts, we create content that resonates.',
            'Our creators understand how to balance SEO requirements with high-quality writing that actual humans want to read.',
        ],
        features: [
            { title: 'Blog Writing', description: 'Regular, high-quality posts that drive search traffic.' },
            { title: 'Copywriting', description: 'Landing page copy that converts visitors into leads.' },
            { title: 'Social Content', description: 'Visual and text content for all major platforms.' },
        ],
        benefits: ['Engage Your Audience', 'Build Authority', 'Improve SEO', 'Brand Loyalty'],
        pricing: [
            { name: 'Base', price: '£699', features: ['4 Blogs', 'SEO Research', 'Editing'] },
            { name: 'Growth', price: '£1,299', features: ['8 Blogs', 'Social Captions', 'Strategy'], popular: true },
            { name: 'Premium', price: 'Custom', features: ['Unlimited Content', 'Video Scripts', 'Whitepapers'] },
        ],
    },
    'automation': {
        title: 'Business Automation',
        tagline: 'Save Time and Reduce Costs with Automation',
        description: 'Intelligent automation solutions that streamline your business processes.',
        longDescription: [
            'Stop spending hours on repetitive tasks. Our automation experts build systems that do the work for you.',
            'We integrate your favorite tools and create workflows that literally work while you sleep.',
        ],
        features: [
            { title: 'Process Automation', description: 'Connect your apps and automate manual workflows.' },
            { title: 'CRM Integration', description: 'Keep your customer data in sync across all platforms.' },
            { title: 'Lead Automation', description: 'Automatically capture and nurture new leads.' },
        ],
        benefits: ['Save Weekly Hours', 'Reduce Manual Error', 'Scale Faster', 'System Integration'],
        pricing: [
            { name: 'Basic', price: '£999', features: ['5 Workflows', 'Zapier Setup', 'Support'] },
            { name: 'Advanced', price: '£2,499', features: ['Full CRM Integration', 'Custom Hooks', 'Make.com'], popular: true },
            { name: 'Custom', price: 'Custom', features: ['Custom API', 'Complex Logic', 'Maintenance'] },
        ],
    },
    'chatbot-development': {
        title: 'Chatbot Development',
        tagline: '24/7 AI-Powered Customer Support',
        description: 'Custom chatbots that engage visitors and qualify leads automatically.',
        longDescription: [
            'Your business never sleeps with an AI chatbot. Engage visitors instantly and never miss a lead again.',
            'Our bots use advanced AI to understand intent and provide helpful, human-like responses.',
        ],
        features: [
            { title: 'AI Chatbots', description: 'Bots that actually understand your customers.' },
            { title: 'Lead Qualification', description: 'Bot-led workflows to filter and capture top leads.' },
            { title: 'Multi-channel', description: 'Support across Website, Facebook, and WhatsApp.' },
        ],
        benefits: ['24/7 Availability', 'Instant Responses', 'Automated Leads', 'Higher Satisfaction'],
        pricing: [
            { name: 'FAQ Bot', price: '£1,499', features: ['Simple Flows', 'Handoff', 'Analytics'] },
            { name: 'AI Assistant', price: '£3,999', features: ['NLP Training', 'Deep Integration', 'Custom UI'], popular: true },
            { name: 'Enterprise', price: 'Custom', features: ['Voice Bot', 'Custom Logic', 'Priority Support'] },
        ],
    },
    'wordpress': {
        title: 'WordPress Development',
        tagline: 'Beautiful, High-Performance WordPress Sites',
        description: 'Custom-built WordPress websites that are easy to manage and fast as light.',
        longDescription: [
            'Forget generic templates. We build custom WordPress themes that are designed for your unique brand.',
            'Our sites are optimized for core web vitals and security out of the box.',
        ],
        features: [
            { title: 'Custom Themes', description: 'Unique designs, no bloated page builders.' },
            { title: 'E-commerce', titleHigh: 'WooCommerce', description: 'Sell online with a high-conversion store.' },
            { title: 'Speed Focus', description: 'Fast-loading sites that rank and convert.' },
        ],
        benefits: ['Full Ownership', 'Easy Content Edits', 'SEO-Ready', 'Scalable Platform'],
        pricing: [
            { name: 'Standard', price: '£2,499', features: ['Custom Design', 'Responsive', 'Basic SEO'] },
            { name: 'E-commerce', price: '£4,999', features: ['WooCommerce', 'Payment Setup', 'Shipping'], popular: true },
            { name: 'Complex', price: 'Custom', features: ['Custom Feature', 'Membership', 'Advanced API'] },
        ],
    },
    'nextjs-react': {
        title: 'Next.js & React Development',
        tagline: 'The Future of Web Applications is Here',
        description: 'Ultra-fast, modern web applications built with Next.js and React.',
        longDescription: [
            'For when performance is non-negotiable. We build modern apps that load instantly and provide a premium experience.',
            'Leverage the power of server-side rendering and static generation for the ultimate SEO advantage.',
        ],
        features: [
            { title: 'Next.js 14+', description: 'App router, server components, and edge functions.' },
            { title: 'Headless CMS', description: 'Edit content easily with Sanity, Strapi, or Contentful.' },
            { title: 'Real-time Apps', description: 'Dynamic, data-driven experiences for your users.' },
        ],
        benefits: ['Maximum Speed', 'Perfect SEO Scores', 'Modern Tech Stack', 'Premium Feel'],
        pricing: [
            { name: 'App Startup', price: '£4,999', features: ['Landing Page', 'SEO Setup', 'CMS Connect'] },
            { name: 'Corporate App', price: '£14,999', features: ['Multi-page', 'Complex State', 'Dashboard'], popular: true },
            { name: 'Custom SaaS', price: 'Custom', features: ['Auth', 'Database', 'Payments', 'Scaling'] },
        ],
    },
};

export async function generateStaticParams() {
    const params: { city: string; service: string }[] = [];
    Object.keys(cities).forEach((city) => {
        Object.keys(services).forEach((service) => {
            params.push({ city, service });
        });
    });
    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; service: string }> }): Promise<Metadata> {
    const { city, service } = await params;
    const cityData = cities[city];
    const serviceData = services[service];

    if (!cityData || !serviceData) return { title: 'Page Not Found' };

    const title = `${serviceData.title} in ${cityData.name} | Leading Digital Agency | Brandlyx`;
    const description = `Looking for ${serviceData.title} in ${cityData.name}? Brandlyx provides expert ${serviceData.title.toLowerCase()} services for businesses in ${cityData.name} and the ${cityData.country}.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
        },
    };
}

export default async function LocationServicePage({ params }: { params: Promise<{ city: string; service: string }> }) {
    const { city, service } = await params;
    const cityData = cities[city];
    const serviceData = services[service];

    if (!cityData || !serviceData) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': `${serviceData.title} in ${cityData.name}`,
        'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brandlyx',
            'address': {
                '@type': 'PostalAddress',
                'addressLocality': cityData.name,
                'addressCountry': 'UK'
            }
        },
        'description': serviceData.description,
        'areaServed': cityData.name,
        'offers': {
            '@type': 'Offer',
            'price': serviceData.pricing[0].price.replace('£', ''),
            'priceCurrency': 'GBP'
        }
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            {/* Hero Section */}
            <section className="pt-40 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 grid-background opacity-30" />
                <div className="absolute top-20 right-10 w-[500px] h-[500px] orb orb-primary opacity-20 animate-pulse-glow" />

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <nav className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href={`/${city}`} className="hover:text-white transition-colors capitalize">{cityData.name}</Link>
                            <span>/</span>
                            <span className="text-cyan-400 font-medium">{serviceData.title}</span>
                        </nav>

                        <h1 className="hero-title mb-4 animate-slide-up">
                            {serviceData.title} in <span className="gradient-text">{cityData.name}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-6 animate-slide-up stagger-1">
                            {serviceData.tagline}
                        </p>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl animate-slide-up stagger-2">
                            Helping businesses across {cityData.name} achieve digital success with professional {serviceData.title.toLowerCase()} solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 animate-slide-up stagger-3">
                            <GlassButton href="/contact" variant="accent" size="lg">
                                Grow My {cityData.name} Business
                            </GlassButton>
                            <GlassButton href="tel:+442012345678" variant="glass" size="lg">
                                Call Our {cityData.name} Team
                            </GlassButton>
                        </div>
                    </div>
                </Container>
            </section>

            {/* In-depth Content Section */}
            <section className="py-24">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-white mb-6">Expert {serviceData.title} for {cityData.name} Clients</h2>
                            {serviceData.longDescription.map((p, i) => (
                                <p key={i} className="text-slate-300 text-lg mb-6 leading-relaxed">
                                    {p.replace(/local market/g, cityData.name + ' market')}
                                </p>
                            ))}

                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Key Features</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {serviceData.features.map((feature, i) => (
                                    <div key={i} className="flex gap-3 p-4 glass-card-static rounded-xl">
                                        <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-sm">{feature.title}</div>
                                            <div className="text-slate-400 text-xs mt-1">{feature.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <aside className="space-y-6">
                            <GlassCard padding="lg" className="border-indigo-500/30">
                                <h3 className="text-xl font-bold text-white mb-4">Why Us for {cityData.name}?</h3>
                                <ul className="space-y-4">
                                    {serviceData.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-slate-300 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <hr className="my-6 border-white/10" />
                                <div className="text-center">
                                    <div className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-bold">Trusted Locally</div>
                                    <div className="text-2xl font-bold text-white">4.9/5</div>
                                    <div className="text-xs text-yellow-500">★★★★★</div>
                                    <div className="text-xs text-slate-500 mt-2">Rating in {cityData.name}</div>
                                </div>
                            </GlassCard>
                        </aside>
                    </div>
                </Container>
            </section>

            {/* Pricing Section (Shared but contextualized) */}
            <section className="section-padding bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="section-title mb-4">Pricing for {cityData.name} Businesses</h2>
                        <p className="section-subtitle">Flexible packages designed to meet the demands of the UK market.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        {serviceData.pricing.map((plan) => (
                            <GlassCard key={plan.name} className={`h-full relative ${plan.popular ? 'border-cyan-500/50' : ''}`} padding="lg">
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-xs font-medium text-white">
                                        Best Value
                                    </div>
                                )}
                                <div className="text-center mb-6">
                                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">{plan.name}</div>
                                    <div className="text-3xl font-bold text-white">{plan.price}</div>
                                    <div className="text-xs text-slate-500 mt-1">Starting cost</div>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                            <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <GlassButton href="/contact" variant={plan.popular ? 'accent' : 'glass'} className="w-full justify-center">
                                    Request Proposal
                                </GlassButton>
                            </GlassCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Local Business Schema Placeholder / Interaction */}
            <section className="section-padding">
                <Container>
                    <div className="glass-card p-12 rounded-3xl text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">Start Your {cityData.name} Success Story</h2>
                        <p className="text-slate-400 mb-10">We prioritize local business growth. Let&apos;s build your digital presence together.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <GlassButton href="/contact" variant="accent" size="lg">Book Free Consultation</GlassButton>
                            <GlassButton href={`/${city}`} variant="glass" size="lg">Other {cityData.name} Services</GlassButton>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
