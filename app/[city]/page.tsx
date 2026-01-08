import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';
import JsonLd from '@/components/seo/JsonLd';

// City data
const cities: Record<string, {
    name: string;
    tagline: string;
    description: string;
    image: string;
    stats: { label: string; value: string }[];
}> = {
    'london': {
        name: 'London',
        tagline: 'Premier Digital Solutions in the Capital',
        description: 'Brandlyx provides world-class digital services to businesses across London. From startups in Shoreditch to established firms in the City, we help London-based businesses dominate the digital landscape.',
        image: '/locations/london.jpg',
        stats: [
            { label: 'Clients in London', value: '120+' },
            { label: 'Projects Completed', value: '450+' },
            { label: 'Expert Team', value: '25+' },
        ],
    },
    'manchester': {
        name: 'Manchester',
        tagline: 'Driving Digital Innovation in the North',
        description: 'As a leading digital agency in Manchester, we help businesses in the Northern Powerhouse thrive. Our local expertise combined with global digital trends makes us the perfect partner for Manchester businesses.',
        image: '/locations/manchester.jpg',
        stats: [
            { label: 'Clients in Manchester', value: '80+' },
            { label: 'Projects Completed', value: '280+' },
            { label: 'Support 24/7', value: 'Yes' },
        ],
    },
};

const services = [
    { id: 'digital-marketing', title: 'Digital Marketing', icon: 'digital-marketing' },
    { id: 'seo', title: 'SEO Services', icon: 'seo' },
    { id: 'content-creation', title: 'Content Creation', icon: 'content-creation' },
    { id: 'automation', title: 'Business Automation', icon: 'automation' },
    { id: 'chatbot-development', title: 'Chatbot Development', icon: 'chatbot' },
    { id: 'wordpress', title: 'WordPress Development', icon: 'wordpress' },
    { id: 'nextjs-react', title: 'Next.js & React', icon: 'nextjs' },
];

export async function generateStaticParams() {
    return Object.keys(cities).map((city) => ({
        city,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city } = await params;
    const cityData = cities[city];

    if (!cityData) return { title: 'Location Not Found' };

    return {
        title: `Digital Agency in ${cityData.name} | SEO & Web Design | Brandlyx`,
        description: `Looking for a digital agency in ${cityData.name}? Brandlyx offers SEO, Web Development, and Digital Marketing services tailored for businesses in ${cityData.name}.`,
    };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city } = await params;
    const cityData = cities[city];

    if (!cityData) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': `Brandlyx ${cityData.name}`,
        'description': cityData.description,
        'url': `https://brandlyx.co.uk/${city}`,
        'telephone': '+442012345678',
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': cityData.name,
            'addressCountry': 'UK'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': city === 'london' ? '51.5074' : '53.4808',
            'longitude': city === 'london' ? '-0.1278' : '-2.2426'
        },
        'priceRange': '££'
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            {/* Hero Section */}
            <section className="pt-44 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 grid-background opacity-30" />
                <div className="absolute top-20 left-10 w-[500px] h-[500px] orb orb-primary animate-pulse-glow" />

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-2 rounded-full glass-card-static text-cyan-400 text-sm font-medium mb-6 animate-slide-up">
                            Serving {cityData.name}
                        </span>
                        <h1 className="hero-title mb-6 animate-slide-up stagger-1">
                            Digital Agency in <span className="gradient-text">{cityData.name}</span>
                        </h1>
                        <p className="section-subtitle max-w-2xl mb-10 animate-slide-up stagger-2">
                            {cityData.tagline}. {cityData.description}
                        </p>

                        <div className="flex flex-wrap gap-4 animate-slide-up stagger-3">
                            <GlassButton href="/contact" variant="accent" size="lg">
                                Start a Project in {cityData.name}
                            </GlassButton>
                            <GlassButton href="#services" variant="glass" size="lg">
                                Our {cityData.name} Services
                            </GlassButton>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-white/5">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {cityData.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-slate-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Services in City Section */}
            <section id="services" className="section-padding">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="section-title mb-4">
                            Expert Services in <span className="gradient-text">{cityData.name}</span>
                        </h2>
                        <p className="section-subtitle">
                            We offer a full range of digital solutions to help your {cityData.name} business grow online.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <Link key={service.id} href={`/${city}/${service.id}`}>
                                <GlassCard
                                    className="h-full group hover:border-cyan-500/30 transition-all"
                                    padding="lg"
                                >
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        {service.title} in {cityData.name}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6">
                                        Professional {service.title.toLowerCase()} services tailored for the {cityData.name} market.
                                    </p>
                                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                                        View Details
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Local Trust Section */}
            <section className="section-padding relative overflow-hidden bg-white/5">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="section-title mb-6">
                                Why {cityData.name} Businesses <span className="gradient-text">Trust Brandlyx</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Local Market Insight</h4>
                                        <p className="text-slate-400 text-sm">We understand the {cityData.name} business landscape and consumer behavior.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Proven Results</h4>
                                        <p className="text-slate-400 text-sm">Helping dozens of companies in {cityData.name} achieve top rankings and high ROI.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card-static p-8 rounded-3xl">
                            <blockquote className="text-xl text-white italic mb-6">
                                &ldquo;Brandlyx is the best digital partner we&apos;ve worked with in {cityData.name}. Their attention to detail and results-driven approach is outstanding.&rdquo;
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white">
                                    {city === 'london' ? 'JD' : 'MT'}
                                </div>
                                <div>
                                    <div className="text-white font-semibold">{city === 'london' ? 'John Doe' : 'Mark Turner'}</div>
                                    <div className="text-slate-400 text-sm">{city === 'london' ? 'CEO, London Exports' : 'Director, Manchester Tech'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <Container>
                    <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your {cityData.name} Business?</h2>
                        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                            Join the growing list of successful businesses in {cityData.name} that partner with Brandlyx for digital excellence.
                        </p>
                        <GlassButton href="/contact" variant="accent" size="lg">
                            Get Your Free Strategy Call
                        </GlassButton>
                    </div>
                </Container>
            </section>
        </>
    );
}
