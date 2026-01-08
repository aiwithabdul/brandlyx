'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '../ui/Container';
import GlassButton from '../ui/GlassButton';

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Services',
        href: '/services',
        dropdown: [
            { name: 'Digital Marketing', href: '/services/digital-marketing' },
            { name: 'SEO Services', href: '/services/seo' },
            { name: 'Content Creation', href: '/services/content-creation' },
            { name: 'Automation', href: '/services/automation' },
            { name: 'Chatbot Development', href: '/services/chatbot-development' },
            { name: 'WordPress Websites', href: '/services/wordpress' },
            { name: 'Next.js / React.js', href: '/services/nextjs-react' },
        ]
    },
    {
        name: 'Locations',
        href: '/locations',
        dropdown: [
            { name: 'London', href: '/london' },
            { name: 'Manchester', href: '/manchester' },
        ]
    },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    const handleNavClick = (name: string, hasDropdown: boolean) => {
        if (hasDropdown) {
            setActiveDropdown(activeDropdown === name ? null : name);
        } else {
            setActiveDropdown(null);
        }
    };

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'py-3 glass'
                : 'py-5 nav-blur-initial'
                }`}
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group" aria-label="Brandlyx Home">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform">
                            B
                        </div>
                        <span className="text-xl font-bold text-white">
                            Brandly<span className="gradient-text-accent">x</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                            >
                                {item.dropdown ? (
                                    <button
                                        onClick={() => handleNavClick(item.name, true)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${activeDropdown === item.name || pathname === item.href
                                            ? 'text-cyan-400 bg-white/5'
                                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {item.name}
                                        <svg
                                            className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${pathname === item.href
                                            ? 'text-cyan-400 bg-white/5'
                                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                {/* Dropdown */}
                                {item.dropdown && activeDropdown === item.name && (
                                    <div className="absolute top-full left-0 mt-2 w-64 glass-card-static rounded-xl p-2 animate-scale-in origin-top-left">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className={`block px-4 py-3 rounded-lg text-sm transition-all ${pathname === subItem.href
                                                    ? 'text-cyan-400 bg-white/10'
                                                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <GlassButton href="/contact" variant="accent" size="sm">
                            Get Started
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </GlassButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 glass-deep rounded-3xl p-6 animate-scale-in border border-white/10 shadow-2xl max-h-[80vh] overflow-y-auto">
                        <div className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <div key={item.name} className="border-b border-white/5 last:border-0 pb-2 mb-2 last:mb-0 last:pb-0">
                                    {item.dropdown ? (
                                        <div className="py-2">
                                            <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                                                {item.name}
                                            </div>
                                            <div className="grid grid-cols-1 gap-1">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={`block px-4 py-3 rounded-xl text-sm transition-all ${pathname === subItem.href
                                                            ? 'text-cyan-400 bg-white/10'
                                                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                                                            }`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${pathname === item.href
                                                ? 'text-cyan-400 bg-white/10'
                                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <GlassButton href="/contact" variant="accent" size="lg" className="w-full">
                                Get Started
                            </GlassButton>
                        </div>
                    </div>
                )}
            </Container>
        </nav>
    );
}
