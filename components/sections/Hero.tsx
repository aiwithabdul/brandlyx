import Container from '../ui/Container';
import GlassButton from '../ui/GlassButton';

interface HeroProps {
    title: string;
    titleHighlight?: string;
    subtitle: string;
    primaryCTA?: {
        text: string;
        href: string;
    };
    secondaryCTA?: {
        text: string;
        href: string;
    };
    badge?: string;
    centered?: boolean;
}

export default function Hero({
    title,
    titleHighlight,
    subtitle,
    primaryCTA,
    secondaryCTA,
    badge,
    centered = true
}: HeroProps) {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-44 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-background" />
            <div className="absolute top-20 left-10 w-[500px] h-[500px] orb orb-primary animate-pulse-glow" />
            <div className="absolute bottom-20 right-10 w-[400px] h-[400px] orb orb-accent animate-pulse-glow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orb orb-secondary opacity-20" />

            <Container className="relative z-10">
                <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}>
                    {/* Badge */}
                    {badge && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-static mb-8 animate-slide-up">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-sm text-slate-300">{badge}</span>
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="hero-title mb-6 animate-slide-up stagger-1">
                        {title}{' '}
                        {titleHighlight && (
                            <span className="gradient-text">{titleHighlight}</span>
                        )}
                    </h1>

                    {/* Subtitle */}
                    <p className="section-subtitle max-w-3xl mx-auto mb-24 animate-slide-up stagger-2">
                        {subtitle}
                    </p>

                    {/* CTAs */}
                    <div className={`flex flex-wrap gap-4 animate-slide-up stagger-3 ${centered ? 'justify-center' : ''}`}>
                        {primaryCTA && (
                            <GlassButton
                                href={primaryCTA.href}
                                variant="accent"
                                size="lg"
                                icon={
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                }
                            >
                                {primaryCTA.text}
                            </GlassButton>
                        )}
                        {secondaryCTA && (
                            <GlassButton
                                href={secondaryCTA.href}
                                variant="glass"
                                size="lg"
                            >
                                {secondaryCTA.text}
                            </GlassButton>
                        )}
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 animate-slide-up stagger-4">
                        <p className="text-sm text-slate-500 mb-4">Trusted by leading brands</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center opacity-50">
                            {['TechCorp', 'InnovateLtd', 'GrowthCo', 'DigitalFirst', 'ScaleUp'].map((brand) => (
                                <span key={brand} className="text-xl font-bold text-slate-400">{brand}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
