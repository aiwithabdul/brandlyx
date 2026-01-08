import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

export const metadata: Metadata = {
    title: 'About Us | Brandlyx Digital Agency',
    description: 'Learn about Brandlyx, a premier UK digital agency. Our mission, values, and the team driving digital excellence for London and Manchester businesses.',
};

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-40 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 grid-background opacity-30" />
                <div className="absolute top-20 left-10 w-[500px] h-[500px] orb orb-primary animate-pulse-glow" />

                <Container className="relative z-10 text-center">
                    <h1 className="hero-title mb-6 animate-slide-up">
                        We Build The <span className="gradient-text">Future of Brands</span>
                    </h1>
                    <p className="section-subtitle max-w-3xl mx-auto animate-slide-up stagger-1">
                        Brandlyx is a team of creators, developers, and strategists dedicated to helping UK businesses thrive in an increasingly digital world.
                    </p>
                </Container>
            </section>

            {/* Mission Section */}
            <section className="section-padding bg-white/5">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                To empower UK-based businesses by providing world-class digital solutions that drive growth, authority, and long-term success. We believe in transparency, innovation, and measurable results.
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                Whether you are a small business in Manchester or a large corporation in London, our goal is the same: to make your brand unbeatable online.
                            </p>
                            <div className="flex gap-4">
                                <GlassButton href="/contact" variant="accent">Join Our Journey</GlassButton>
                            </div>
                        </div>
                        <div className="relative">
                            <GlassCard className="aspect-video flex items-center justify-center overflow-hidden" padding="md">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20" />
                                <div className="relative z-10 text-6xl font-black text-white/10 uppercase tracking-tighter">Brandlyx HQ</div>
                            </GlassCard>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-card-static flex items-center justify-center text-cyan-400 font-bold text-xl rounded-2xl rotate-12">
                                Since <br /> 2024
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values Section */}
            <section className="section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="section-title mb-4">Our Core <span className="gradient-text">Values</span></h2>
                        <p className="section-subtitle">The principles that guide every project we undertake.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: 'Innovation First', desc: 'We stay on the cutting edge of AI, Web Dev, and SEO to give our clients an unfair advantage.', icon: '🚀' },
                            { title: 'Data Driven', desc: 'No guesswork. We use analytics and market data to drive every strategic decision.', icon: '📊' },
                            { title: 'Local Expertise', desc: 'Deeply rooted in the UK market, we understand the local nuances that make a difference.', icon: '🇬🇧' },
                            { title: 'Transparency', desc: 'Clear communication, honest reporting, and no hidden fees. Ever.', icon: '🤝' },
                            { title: 'Client Centric', desc: 'Your success is our success. We partner with you for the long haul.', icon: '🏆' },
                            { title: 'Premium Quality', desc: 'We don\'t do "good enough". We deliver excellence in every pixel and every line of code.', icon: '💎' },
                        ].map((value, i) => (
                            <GlassCard key={i} padding="lg">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-slate-400 text-sm">{value.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Team Section Placeholder */}
            <section className="section-padding bg-gradient-to-b from-transparent to-indigo-950/20">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="section-title mb-4">Meet the <span className="gradient-text">Strategists</span></h2>
                        <p className="section-subtitle">The experts behind the Brandlyx excellence.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {['Founder / CEO', 'Head of SEO', 'Lead Developer', 'Creative Director'].map((role, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-32 h-32 mx-auto rounded-full glass-card-static mb-6 flex items-center justify-center text-white/20 group-hover:scale-110 transition-transform">
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                                </div>
                                <h4 className="text-white font-bold">Team Member {i + 1}</h4>
                                <p className="text-cyan-400 text-sm font-medium">{role}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Milestone Section */}
            <section className="section-padding">
                <Container>
                    <div className="glass-card p-12 rounded-3xl text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Brandlyx Difference?</h2>
                        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                            Let&apos;s talk about how we can transform your business into a digital powerhouse.
                        </p>
                        <GlassButton href="/contact" variant="accent" size="lg">Contact Us Today</GlassButton>
                    </div>
                </Container>
            </section>
        </>
    );
}
