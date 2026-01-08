import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
    title: 'Contact Us | Brandlyx Digital Agency',
    description: 'Get in touch with Brandlyx. Book a free consultation, request a quote, or just say hello. We are here to help your UK business grow.',
};

export default function ContactPage() {
    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="pt-20 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 grid-background opacity-20" />
                <Container className="relative z-10 text-center">
                    <h1 className="hero-title mb-4">Let&apos;s <span className="gradient-text">Connect</span></h1>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        Ready to start your next project? Our team is waiting to hear from you.
                        Choose your preferred method of contact below.
                    </p>
                </Container>
            </section>

            {/* Reuse Contact Section which includes the form and info cards */}
            <ContactSection />

            {/* Map Placeholder Section */}
            <section className="pb-20">
                <Container>
                    <div className="glass-card h-[400px] w-full rounded-3xl flex flex-col items-center justify-center text-center p-8 overflow-hidden relative">
                        <div className="absolute inset-0 bg-indigo-950/20" />
                        <div className="relative z-10">
                            <div className="text-4xl mb-4">📍</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Our Regional Hubs</h3>
                            <p className="text-slate-400 max-w-md mx-auto">
                                We operate across the UK with primary hubs in London and Manchester.
                                Our team is available for in-person meetings by appointment.
                            </p>
                        </div>
                        {/* Abstract map pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="400" cy="200" r="1" fill="white" />
                                <circle cx="420" cy="220" r="1" fill="white" />
                                <circle cx="380" cy="180" r="1" fill="white" />
                                <path d="M100 300Q200 100 400 200T700 100" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                                <path d="M50 50Q400 350 750 250" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                            </svg>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
