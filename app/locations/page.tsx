import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

export const metadata: Metadata = {
    title: 'Locations | Digital Agency UK | Brandlyx',
    description: 'Brandlyx operates across the United Kingdom with dedicated hubs in London and Manchester. Discover our local digital services.',
};

const cities = [
    {
        id: 'london',
        name: 'London',
        region: 'Greater London',
        description: 'Serving the Capital with premium SEO, Web Dev, and Marketing solutions.',
        stats: '120+ Clients',
    },
    {
        id: 'manchester',
        name: 'Manchester',
        region: 'North West England',
        description: 'Driving digital innovation in the heart of the Northern Powerhouse.',
        stats: '80+ Clients',
    },
];

export default function LocationsPage() {
    return (
        <>
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 grid-background opacity-30" />
                <Container className="relative z-10 text-center">
                    <h1 className="hero-title mb-6 animate-slide-up">
                        Our UK <span className="gradient-text">Locations</span>
                    </h1>
                    <p className="section-subtitle max-w-2xl mx-auto animate-slide-up stagger-1">
                        We provide local expertise with a national reach.
                        Visit our location-specific pages to see how we help businesses in your area.
                    </p>
                </Container>
            </section>

            <section className="pb-20">
                <Container>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {cities.map((city, i) => (
                            <Link key={city.id} href={`/${city.id}`}>
                                <GlassCard className="h-full group hover:border-cyan-500/30 transition-all" padding="xl">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h2 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">{city.name}</h2>
                                            <p className="text-cyan-400 text-sm font-medium">{city.region}</p>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold">
                                            {city.stats}
                                        </div>
                                    </div>
                                    <p className="text-slate-400 mb-8 leading-relaxed">
                                        {city.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-white font-bold group-hover:gap-3 transition-all">
                                        Explore {city.name} Office
                                        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="section-padding">
                <Container>
                    <div className="glass-card-static p-12 rounded-3xl text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">Expanding Across the UK</h2>
                        <p className="text-slate-400 mb-0">
                            Don&apos;t see your city? We work with clients nationwide.
                            Our remote-first culture ensures top-tier service regardless of your location.
                            <br /><br />
                            <Link href="/contact" className="text-cyan-400 hover:underline font-bold">Inquire about your region →</Link>
                        </p>
                    </div>
                </Container>
            </section>
        </>
    );
}
