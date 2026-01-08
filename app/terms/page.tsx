import { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
    title: 'Terms of Service | Brandlyx',
    description: 'Terms of service for Brandlyx Digital Agency.',
};

export default function TermsPage() {
    return (
        <section className="pt-40 pb-20">
            <Container>
                <div className="max-w-3xl mx-auto glass-card p-12 rounded-3xl">
                    <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
                    <div className="space-y-6 text-slate-300">
                        <p>Last Updated: January 8, 2026</p>
                        <p>By using the Brandlyx website or services, you agree to the following terms and conditions.</p>

                        <h2 className="text-xl font-bold text-white mt-8">1. Services</h2>
                        <p>Brandlyx provides digital marketing, SEO, and web development services. Specific project terms will be outlined in individual contracts.</p>

                        <h2 className="text-xl font-bold text-white mt-8">2. Intellectual Property</h2>
                        <p>All content created by Brandlyx remains our intellectual property until full payment is received, at which point ownership transfers to the client as per contract terms.</p>

                        <h2 className="text-xl font-bold text-white mt-8">3. Limitation of Liability</h2>
                        <p>Brandlyx is not liable for indirect or consequential losses resulting from the use of our services.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
