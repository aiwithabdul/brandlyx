import { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
    title: 'Privacy Policy | Brandlyx',
    description: 'Privacy policy for Brandlyx Digital Agency. Learn how we handle your data in compliance with UK GDPR.',
};

export default function PrivacyPage() {
    return (
        <section className="pt-40 pb-20">
            <Container>
                <div className="max-w-3xl mx-auto glass-card p-12 rounded-3xl">
                    <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
                    <div className="space-y-6 text-slate-300">
                        <p>Last Updated: January 8, 2026</p>
                        <p>At Brandlyx, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p>

                        <h2 className="text-xl font-bold text-white mt-8">1. Information We Collect</h2>
                        <p>We may collect personal information such as your name, email address, phone number, and company details when you fill out a contact form or request a quote.</p>

                        <h2 className="text-xl font-bold text-white mt-8">2. How We Use Your Information</h2>
                        <p>We use your information to provide and improve our services, communicate with you, and customize your experience. We do not sell your data to third parties.</p>

                        <h2 className="text-xl font-bold text-white mt-8">3. Compliance</h2>
                        <p>Our practices are in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

                        <h2 className="text-xl font-bold text-white mt-8">4. Security</h2>
                        <p>We implement industry-standard security measures to protect your data from unauthorized access.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
