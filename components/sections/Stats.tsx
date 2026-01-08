import Container from '../ui/Container';

interface Stat {
    value: string;
    label: string;
    suffix?: string;
}

interface StatsProps {
    stats: Stat[];
}

const defaultStats: Stat[] = [
    { value: '500', suffix: '+', label: 'Projects Completed' },
    { value: '98', suffix: '%', label: 'Client Satisfaction' },
    { value: '50', suffix: '+', label: 'Team Experts' },
    { value: '10', suffix: '+', label: 'Years Experience' },
];

export default function Stats({ stats = defaultStats }: StatsProps) {
    return (
        <section className="section-padding relative">
            <Container>
                <div className="glass-card-static rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                    {stat.value}
                                    {stat.suffix && <span className="text-cyan-400">{stat.suffix}</span>}
                                </div>
                                <div className="text-slate-400 text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
