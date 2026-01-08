import Link from 'next/link';
import Container from '../ui/Container';

const footerLinks = {
    services: [
        { name: 'Digital Marketing', href: '/services/digital-marketing' },
        { name: 'SEO Services', href: '/services/seo' },
        { name: 'Content Creation', href: '/services/content-creation' },
        { name: 'Automation', href: '/services/automation' },
        { name: 'Chatbot Development', href: '/services/chatbot-development' },
        { name: 'WordPress Websites', href: '/services/wordpress' },
        { name: 'Next.js / React.js', href: '/services/nextjs-react' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ],
    locations: [
        { name: 'London', href: '/locations/seo/london' },
        { name: 'Manchester', href: '/locations/digital-marketing/manchester' },
        { name: 'Birmingham', href: '/locations/web-development/birmingham' },
        { name: 'Leeds', href: '/locations/seo/leeds' },
        { name: 'View All Locations', href: '/locations' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
    ],
};

const socialLinks = [
    {
        name: 'Twitter',
        href: 'https://twitter.com/brandlyx',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        )
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/brandlyx',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/brandlyx',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
        )
    },
    {
        name: 'YouTube',
        href: 'https://youtube.com/@brandlyx',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        )
    },
];

export default function Footer() {
    return (
        <footer className="relative pt-20 pb-10 border-t border-white/10">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] orb orb-primary opacity-20" />

            <Container>
                <div className="relative z-10">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
                        {/* Brand Column */}
                        <div className="col-span-2 md:col-span-4 lg:col-span-1">
                            <Link href="/" className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white text-lg">
                                    B
                                </div>
                                <span className="text-xl font-bold text-white">
                                    Brandly<span className="gradient-text-accent">X</span>
                                </span>
                            </Link>
                            <p className="text-slate-400 text-sm mb-6 max-w-xs">
                                Transforming businesses with cutting-edge digital solutions. Your success is our mission.
                            </p>
                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg glass-button flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Services</h4>
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

                        {/* Company */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
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

                        {/* Locations */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Locations</h4>
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

                        {/* Newsletter */}
                        <div className="col-span-2 md:col-span-2 lg:col-span-1">
                            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
                            <p className="text-slate-400 text-sm mb-4">
                                Get the latest insights and tips delivered to your inbox.
                            </p>
                            <form className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="glass-input text-sm"
                                />
                                <button
                                    type="submit"
                                    className="w-full btn-accent text-sm py-2"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-slate-500 text-sm">
                            © {new Date().getFullYear()} BrandlyX. All rights reserved.
                        </p>
                        <div className="flex gap-6">
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
