import Link from 'next/link';
import Container from '../ui/Container';
import GlassButton from '../ui/GlassButton';

const footerLinks = {
    services: [
        { name: 'Digital Marketing', href: '/services/digital-marketing' },
        { name: 'SEO Services', href: '/services/seo' },
        { name: 'Content Creation', href: '/services/content-creation' },
        { name: 'Automation', href: '/services/automation' },
        { name: 'Chatbot Development', href: '/services/chatbot-development' },
        { name: 'WordPress Websites', href: '/services/wordpress' },
        { name: 'Next.js / React', href: '/services/nextjs-react' },
    ],
    locations: [
        { name: 'London', href: '/london' },
        { name: 'Manchester', href: '/manchester' },
        { name: 'Birmingham', href: '/birmingham' },
        { name: 'Leeds', href: '/leeds' },
        { name: 'Glasgow', href: '/glasgow' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Work', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
    ],
};

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/brandlyx',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/brandlyx',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/brandlyx',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        href: 'https://facebook.com/brandlyx',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative pt-20 pb-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-950 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            <Container className="relative z-10">
                {/* CTA Section */}
                <div className="glass-card-static p-8 md:p-12 rounded-3xl mb-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-violet-500/10" />
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto mb-8">
                            Let&apos;s discuss how Brandlyx can help you achieve your digital goals. Get a free consultation today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <GlassButton href="/contact" variant="accent" size="lg">
                                Start a Project
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
                </div>

                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white text-lg">
                                B
                            </div>
                            <span className="text-xl font-bold text-white">
                                Brandly<span className="gradient-text-accent">X</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm mb-6 max-w-sm">
                            Transforming UK businesses with innovative digital solutions. From SEO to custom web development,
                            we&apos;re your partner in digital excellence.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/10 transition-all"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Locations</h3>
                        <ul className="space-y-3">
                            {footerLinks.locations.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © {currentYear} Brandlyx. All rights reserved. Registered in England & Wales.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-500 text-sm hover:text-slate-300 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
