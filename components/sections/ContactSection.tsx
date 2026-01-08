'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import Container from '../ui/Container';
import GlassButton from '../ui/GlassButton';

const contactInfo = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Visit Us',
        details: ['123 Digital Street', 'London, EC1V 2NX', 'United Kingdom'],
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Email Us',
        details: ['hello@brandlyx.co.uk', 'support@brandlyx.co.uk'],
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        title: 'Call Us',
        details: ['+44 (0) 20 1234 5678', 'Mon-Fri 9am-6pm GMT'],
    },
];

const services = [
    'Digital Marketing',
    'SEO Services',
    'Content Creation',
    'Automation',
    'Chatbot Development',
    'WordPress Website',
    'Next.js / React Website',
    'Other',
];

export default function ContactSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            message: '',
        });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section ref={sectionRef} id="contact" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/30 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] orb orb-primary opacity-20" />

            <Container className="relative z-10">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-block px-4 py-2 rounded-full glass-card-static text-cyan-400 text-sm font-medium mb-6">
                        Get In Touch
                    </span>
                    <h2 className="section-title mb-6">
                        Let&apos;s Start Your <span className="gradient-text">Project</span>
                    </h2>
                    <p className="section-subtitle">
                        Ready to transform your digital presence? Get in touch with our team and let&apos;s discuss how we can help your business grow.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info Cards */}
                    <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {contactInfo.map((info, index) => (
                            <div
                                key={info.title}
                                className="glass-card p-6 group"
                                style={{ transitionDelay: `${200 + index * 100}ms` }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                                        {info.details.map((detail, i) => (
                                            <p key={i} className="text-slate-400 text-sm">{detail}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Social Links */}
                        <div className="glass-card p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                            <div className="flex gap-3">
                                {['linkedin', 'twitter', 'instagram', 'facebook'].map((social) => (
                                    <a
                                        key={social}
                                        href={`https://${social}.com/brandlyx`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                                    >
                                        {social === 'linkedin' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        )}
                                        {social === 'twitter' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        )}
                                        {social === 'instagram' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        )}
                                        {social === 'facebook' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`lg:col-span-2 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="glass-card-static p-8 rounded-3xl">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                    <p className="text-slate-400">We&apos;ve received your message and will get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="glass-input"
                                                placeholder="John Smith"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="glass-input"
                                                placeholder="john@company.co.uk"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="glass-input"
                                                placeholder="+44 7XXX XXXXXX"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="glass-input"
                                                placeholder="Your Company Ltd"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                                                Service Interested In *
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                                className="glass-input cursor-pointer"
                                            >
                                                <option value="" className="bg-slate-900">Select a service</option>
                                                {services.map((service) => (
                                                    <option key={service} value={service} className="bg-slate-900">
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                                                Project Budget
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="glass-input cursor-pointer"
                                            >
                                                <option value="" className="bg-slate-900">Select budget range</option>
                                                <option value="1000-5000" className="bg-slate-900">£1,000 - £5,000</option>
                                                <option value="5000-10000" className="bg-slate-900">£5,000 - £10,000</option>
                                                <option value="10000-25000" className="bg-slate-900">£10,000 - £25,000</option>
                                                <option value="25000+" className="bg-slate-900">£25,000+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                            Project Details *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="glass-input resize-none"
                                            placeholder="Tell us about your project, goals, and timeline..."
                                        />
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-accent flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                        <p className="text-xs text-slate-500">
                                            We&apos;ll respond within 24 hours
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
