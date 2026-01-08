import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

// Service data
const services: Record<string, {
    title: string;
    tagline: string;
    description: string;
    longDescription: string[];
    icon: string;
    features: { title: string; description: string }[];
    benefits: string[];
    process: { step: number; title: string; description: string }[];
    pricing: { name: string; price: string; features: string[]; popular?: boolean }[];
    faqs: { question: string; answer: string }[];
}> = {
    'digital-marketing': {
        title: 'Digital Marketing',
        tagline: 'Data-Driven Strategies for Maximum ROI',
        description: 'Comprehensive digital marketing services that drive traffic, engagement, and conversions for UK businesses.',
        longDescription: [
            'In today\'s competitive digital landscape, having a strong online presence isn\'t enough. You need strategic, data-driven marketing that reaches your ideal customers at the right time with the right message.',
            'Our digital marketing team combines creativity with analytics to deliver campaigns that not only look great but also generate measurable results. From PPC advertising to social media marketing, we create integrated strategies that amplify your brand and drive growth.',
        ],
        icon: 'digital-marketing',
        features: [
            { title: 'PPC Advertising', description: 'Strategic Google Ads and Bing Ads campaigns that maximize your advertising budget and drive qualified leads.' },
            { title: 'Social Media Marketing', description: 'Engaging social media strategies across LinkedIn, Facebook, Instagram, and Twitter to build your brand.' },
            { title: 'Email Marketing', description: 'Targeted email campaigns that nurture leads, retain customers, and drive repeat business.' },
            { title: 'Marketing Automation', description: 'Automated workflows that deliver personalized experiences at scale.' },
            { title: 'Analytics & Reporting', description: 'Comprehensive reporting dashboards that track every metric that matters to your business.' },
            { title: 'Conversion Optimization', description: 'A/B testing and optimization strategies to improve your conversion rates.' },
        ],
        benefits: [
            'Increase brand visibility across all digital channels',
            'Generate more qualified leads and sales',
            'Reduce customer acquisition costs',
            'Build lasting customer relationships',
            'Track and measure every marketing pound spent',
            'Stay ahead of competitors with data-driven insights',
        ],
        process: [
            { step: 1, title: 'Discovery & Audit', description: 'We analyze your current marketing efforts, competitors, and target audience to identify opportunities.' },
            { step: 2, title: 'Strategy Development', description: 'We create a comprehensive marketing strategy tailored to your business goals and budget.' },
            { step: 3, title: 'Campaign Launch', description: 'We implement campaigns across chosen channels with continuous monitoring and optimization.' },
            { step: 4, title: 'Report & Refine', description: 'Monthly reporting and strategy refinement to continuously improve results.' },
        ],
        pricing: [
            { name: 'Starter', price: '£999', features: ['Google Ads Management', 'Monthly Reporting', '1 Social Platform', 'Email Support'] },
            { name: 'Growth', price: '£1,999', features: ['Google & Social Ads', 'Weekly Reporting', '3 Social Platforms', 'Email Marketing', 'Priority Support'], popular: true },
            { name: 'Enterprise', price: '£3,999+', features: ['Full Channel Management', 'Real-time Dashboard', 'All Social Platforms', 'Marketing Automation', 'Dedicated Manager'] },
        ],
        faqs: [
            { question: 'How long before I see results?', answer: 'PPC campaigns can generate immediate traffic, while organic strategies typically show significant results within 3-6 months. We provide monthly reports so you can track progress from day one.' },
            { question: 'What platforms do you manage?', answer: 'We manage campaigns across Google Ads, Bing Ads, Facebook, Instagram, LinkedIn, Twitter, and email platforms like Mailchimp and HubSpot.' },
            { question: 'Do you require long-term contracts?', answer: 'We offer flexible monthly agreements. While we recommend at least 3 months to see optimal results, you can adjust or cancel with 30 days notice.' },
        ],
    },
    'seo': {
        title: 'SEO Services',
        tagline: 'Dominate Search Rankings in the UK',
        description: 'Proven SEO strategies that improve your visibility on Google and drive organic traffic to your website.',
        longDescription: [
            'Search Engine Optimization is the foundation of sustainable online growth. When potential customers search for products or services like yours, you need to be visible on the first page of Google.',
            'Our SEO experts combine technical expertise with creative content strategies to improve your search rankings and drive qualified organic traffic. We focus on both quick wins and long-term sustainable growth.',
        ],
        icon: 'seo',
        features: [
            { title: 'Technical SEO Audits', description: 'Comprehensive audits that identify and fix technical issues affecting your search rankings.' },
            { title: 'Local SEO', description: 'Optimize your presence in local search results and Google Maps to attract nearby customers.' },
            { title: 'Link Building', description: 'Strategic outreach campaigns to acquire high-quality backlinks from authoritative websites.' },
            { title: 'Keyword Research', description: 'In-depth keyword analysis to target the terms your customers are actually searching for.' },
            { title: 'Content Optimization', description: 'Optimize existing content and create new SEO-focused content that ranks and converts.' },
            { title: 'Competitor Analysis', description: 'Detailed analysis of your competitors\' SEO strategies to identify opportunities.' },
        ],
        benefits: [
            'Increase organic traffic without ongoing ad spend',
            'Build long-term sustainable search visibility',
            'Improve brand credibility and trust',
            'Capture high-intent customers actively searching',
            'Reduce dependency on paid advertising',
            'Outrank competitors in key search terms',
        ],
        process: [
            { step: 1, title: 'SEO Audit', description: 'Comprehensive analysis of your website\'s current SEO performance and opportunities.' },
            { step: 2, title: 'Keyword Strategy', description: 'Research and prioritize target keywords based on search volume and competition.' },
            { step: 3, title: 'On-Page Optimization', description: 'Optimize your website structure, content, and technical elements.' },
            { step: 4, title: 'Off-Page & Monitoring', description: 'Build quality backlinks and continuously monitor rankings and adjust strategy.' },
        ],
        pricing: [
            { name: 'Local', price: '£799', features: ['Local SEO Focus', 'Google Business Profile', '5 Target Keywords', 'Monthly Reporting'] },
            { name: 'National', price: '£1,499', features: ['National SEO Strategy', 'Technical Optimization', '15 Target Keywords', 'Link Building', 'Content Strategy'], popular: true },
            { name: 'Enterprise', price: '£2,999+', features: ['Multi-Location SEO', 'Advanced Technical SEO', 'Unlimited Keywords', 'Content Creation', 'Dedicated SEO Manager'] },
        ],
        faqs: [
            { question: 'How long does SEO take to work?', answer: 'SEO is a long-term strategy. You\'ll typically see initial improvements within 3-4 months, with significant results at 6-12 months. We focus on both quick wins and sustainable growth.' },
            { question: 'Do you guarantee first page rankings?', answer: 'No reputable SEO agency can guarantee specific rankings as Google\'s algorithm is constantly evolving. However, we have a strong track record of achieving first-page rankings for our clients.' },
            { question: 'What makes your SEO different?', answer: 'We focus on ROI, not just rankings. Our strategies are tailored to your business goals and we provide transparent reporting on the metrics that matter most to your bottom line.' },
        ],
    },
    'content-creation': {
        title: 'Content Creation',
        tagline: 'Compelling Content That Converts',
        description: 'Professional content creation services that engage your audience and support your marketing goals.',
        longDescription: [
            'Great content is the backbone of every successful digital marketing strategy. Whether it\'s blog posts that rank on Google, videos that engage on social media, or copy that converts visitors into customers.',
            'Our content team combines storytelling expertise with SEO best practices to create content that resonates with your audience and drives measurable business results.',
        ],
        icon: 'content-creation',
        features: [
            { title: 'Blog Writing', description: 'SEO-optimized blog posts that establish thought leadership and drive organic traffic.' },
            { title: 'Video Production', description: 'Professional video content for social media, websites, and advertising campaigns.' },
            { title: 'Copywriting', description: 'Persuasive copy for websites, landing pages, and marketing materials.' },
            { title: 'Infographics', description: 'Visual content that simplifies complex information and drives social sharing.' },
            { title: 'Social Media Content', description: 'Engaging posts and stories tailored for each social platform.' },
            { title: 'Email Content', description: 'Compelling email sequences that nurture leads and drive conversions.' },
        ],
        benefits: [
            'Establish thought leadership in your industry',
            'Improve SEO with quality content',
            'Engage audience across all channels',
            'Build trust and credibility',
            'Generate leads through valuable content',
            'Support sales with compelling materials',
        ],
        process: [
            { step: 1, title: 'Content Strategy', description: 'Develop a content plan aligned with your business goals and target audience.' },
            { step: 2, title: 'Topic Research', description: 'Research topics, keywords, and competitor content to identify opportunities.' },
            { step: 3, title: 'Content Creation', description: 'Create high-quality content with your brand voice and SEO optimization.' },
            { step: 4, title: 'Distribution & Analysis', description: 'Publish content across channels and analyze performance for optimization.' },
        ],
        pricing: [
            { name: 'Starter', price: '£699', features: ['4 Blog Posts/Month', 'SEO Optimization', 'Social Media Snippets', 'Content Calendar'] },
            { name: 'Professional', price: '£1,299', features: ['8 Blog Posts/Month', '2 Video Scripts', 'Infographic Design', 'Email Sequences', 'Analytics Reporting'], popular: true },
            { name: 'Agency', price: '£2,499+', features: ['Unlimited Content', 'Video Production', 'Full Social Management', 'Dedicated Writer', 'Strategy Sessions'] },
        ],
        faqs: [
            { question: 'Who writes the content?', answer: 'Our in-house team of professional writers creates all content. Each writer specializes in specific industries and undergoes rigorous quality control.' },
            { question: 'Can you match our brand voice?', answer: 'Absolutely. We conduct a thorough brand voice analysis and create a style guide to ensure all content reflects your unique brand personality.' },
            { question: 'Do you provide imagery?', answer: 'Yes, we source professional stock imagery or create custom graphics. We can also coordinate photoshoots for original content.' },
        ],
    },
    'automation': {
        title: 'Business Automation',
        tagline: 'Work Smarter, Not Harder',
        description: 'Intelligent automation solutions that streamline your workflows and boost productivity.',
        longDescription: [
            'Manual, repetitive tasks drain your team\'s time and energy. Our automation solutions handle the routine work so your team can focus on what matters most—growing your business.',
            'From marketing automation to workflow optimization, we implement smart solutions that reduce errors, improve efficiency, and scale with your business.',
        ],
        icon: 'automation',
        features: [
            { title: 'Workflow Automation', description: 'Automate repetitive processes across departments to save time and reduce errors.' },
            { title: 'CRM Integration', description: 'Connect your tools and systems for seamless data flow and better customer insights.' },
            { title: 'Lead Scoring', description: 'Automatically qualify and prioritize leads based on engagement and behavior.' },
            { title: 'Email Sequences', description: 'Automated email campaigns triggered by user actions and behaviors.' },
            { title: 'Data Synchronization', description: 'Keep your data synchronized across all platforms in real-time.' },
            { title: 'Custom Integrations', description: 'Connect any tools with custom API integrations and Zapier workflows.' },
        ],
        benefits: [
            'Save 20+ hours per week on repetitive tasks',
            'Reduce human error and improve consistency',
            'Scale operations without adding headcount',
            'Improve customer experience with faster responses',
            'Get real-time visibility into all processes',
            'Focus team on high-value activities',
        ],
        process: [
            { step: 1, title: 'Process Audit', description: 'Analyze your current workflows to identify automation opportunities.' },
            { step: 2, title: 'Solution Design', description: 'Design custom automation solutions tailored to your business needs.' },
            { step: 3, title: 'Implementation', description: 'Build and deploy automation with thorough testing at each stage.' },
            { step: 4, title: 'Training & Support', description: 'Train your team and provide ongoing support and optimization.' },
        ],
        pricing: [
            { name: 'Starter', price: '£999', features: ['5 Automated Workflows', 'Basic Integrations', 'Email Automation', 'Monthly Support'] },
            { name: 'Business', price: '£2,499', features: ['20 Automated Workflows', 'CRM Integration', 'Lead Scoring', 'Custom Dashboards', 'Priority Support'], popular: true },
            { name: 'Enterprise', price: 'Custom', features: ['Unlimited Workflows', 'Custom Development', 'API Integrations', 'Dedicated Support', 'SLA Guarantee'] },
        ],
        faqs: [
            { question: 'What tools do you work with?', answer: 'We work with popular platforms like HubSpot, Salesforce, Zapier, Make, and can build custom integrations using APIs.' },
            { question: 'How much time can automation save?', answer: 'On average, our clients save 20-30 hours per week. The exact savings depend on your current processes and automation scope.' },
            { question: 'Will automation replace my team?', answer: 'No, automation handles repetitive tasks so your team can focus on strategic work that requires human creativity and judgment.' },
        ],
    },
    'chatbot-development': {
        title: 'Chatbot Development',
        tagline: '24/7 Customer Engagement Powered by AI',
        description: 'Intelligent chatbots that qualify leads, answer questions, and provide support around the clock.',
        longDescription: [
            'Your customers expect instant responses, but your team can\'t be available 24/7. Our AI-powered chatbots bridge this gap, providing immediate assistance to website visitors at any hour.',
            'From simple FAQ bots to sophisticated AI assistants, we build custom chatbot solutions that represent your brand, qualify leads, and improve customer satisfaction.',
        ],
        icon: 'chatbot',
        features: [
            { title: 'AI-Powered Conversations', description: 'Natural language processing for human-like conversations that understand context.' },
            { title: 'Lead Qualification', description: 'Automatically qualify prospects and route hot leads to your sales team.' },
            { title: 'Multi-Platform Support', description: 'Deploy on your website, Facebook Messenger, WhatsApp, and more.' },
            { title: 'CRM Integration', description: 'Automatically sync conversations and lead data with your CRM system.' },
            { title: 'Analytics Dashboard', description: 'Track conversation metrics, conversion rates, and customer satisfaction.' },
            { title: 'Human Handoff', description: 'Seamlessly transfer complex queries to your support team when needed.' },
        ],
        benefits: [
            'Provide instant 24/7 customer support',
            'Reduce support ticket volume by up to 70%',
            'Qualify leads automatically around the clock',
            'Improve customer satisfaction scores',
            'Scale support without hiring additional staff',
            'Capture leads outside business hours',
        ],
        process: [
            { step: 1, title: 'Requirements Analysis', description: 'Understand your use cases, customer questions, and integration needs.' },
            { step: 2, title: 'Conversation Design', description: 'Design conversation flows and train the AI on your specific domain.' },
            { step: 3, title: 'Development & Testing', description: 'Build the chatbot with thorough testing across all scenarios.' },
            { step: 4, title: 'Deployment & Optimization', description: 'Launch the bot and continuously improve based on user interactions.' },
        ],
        pricing: [
            { name: 'Basic Bot', price: '£1,499', features: ['FAQ Chatbot', 'Website Integration', 'Basic Analytics', '3 Months Support', 'Up to 1000 Conversations'] },
            { name: 'AI Assistant', price: '£3,999', features: ['AI-Powered NLP', 'Lead Qualification', 'CRM Integration', 'Multi-Platform', 'Unlimited Conversations'], popular: true },
            { name: 'Enterprise', price: 'Custom', features: ['Custom AI Training', 'API Integrations', 'White-Label Solution', 'Dedicated Support', 'SLA Guarantee'] },
        ],
        faqs: [
            { question: 'Can the chatbot handle complex questions?', answer: 'Our AI chatbots use natural language processing to understand context and handle complex queries. For questions outside their scope, they seamlessly handoff to human agents.' },
            { question: 'How long does it take to build a chatbot?', answer: 'A basic FAQ bot can be deployed in 2-3 weeks. More sophisticated AI assistants typically take 4-8 weeks depending on complexity and integrations required.' },
            { question: 'Can the bot speak multiple languages?', answer: 'Yes, we can train chatbots to communicate in multiple languages, allowing you to serve international customers.' },
        ],
    },
    'wordpress': {
        title: 'WordPress Development',
        tagline: 'Professional WordPress Websites That Perform',
        description: 'Custom WordPress websites that are fast, secure, SEO-optimized, and easy to manage.',
        longDescription: [
            'WordPress powers over 40% of the web for good reason. It\'s flexible, scalable, and when built correctly, incredibly powerful. We create custom WordPress websites that don\'t just look beautiful—they perform.',
            'From simple business websites to complex e-commerce stores, our WordPress development team builds solutions that load fast, rank well, and give you full control over your content.',
        ],
        icon: 'wordpress',
        features: [
            { title: 'Custom Theme Development', description: 'Unique, custom-designed themes that perfectly represent your brand.' },
            { title: 'E-commerce Solutions', description: 'WooCommerce stores with custom features, payment integrations, and optimization.' },
            { title: 'Speed Optimization', description: 'Performance tuning for sub-3-second load times and Core Web Vitals compliance.' },
            { title: 'Security Hardening', description: 'Enterprise-grade security measures to protect your website and data.' },
            { title: 'Plugin Development', description: 'Custom plugin development for functionality unique to your needs.' },
            { title: 'Ongoing Maintenance', description: 'Regular updates, backups, and security monitoring to keep your site running smoothly.' },
        ],
        benefits: [
            'Full ownership and control of your website',
            'Easy content management without technical skills',
            'Massive ecosystem of plugins and extensions',
            'SEO-friendly architecture out of the box',
            'Cost-effective compared to custom development',
            'Scales from blogs to enterprise applications',
        ],
        process: [
            { step: 1, title: 'Discovery & Design', description: 'Understand your requirements and create custom design mockups.' },
            { step: 2, title: 'Development', description: 'Build your custom WordPress theme with all required functionality.' },
            { step: 3, title: 'Content & Training', description: 'Help migrate content and train your team on managing the site.' },
            { step: 4, title: 'Launch & Support', description: 'Launch with full testing and provide ongoing maintenance support.' },
        ],
        pricing: [
            { name: 'Business Site', price: '£2,499', features: ['5-10 Pages', 'Custom Theme', 'Mobile Responsive', 'Basic SEO', 'Contact Forms', '3 Months Support'] },
            { name: 'E-commerce', price: '£4,999', features: ['WooCommerce Store', 'Up to 100 Products', 'Payment Integration', 'Shipping Setup', 'Email Marketing', '6 Months Support'], popular: true },
            { name: 'Enterprise', price: '£9,999+', features: ['Complex Functionality', 'Custom Plugins', 'Multi-site', 'API Integrations', 'Ongoing Retainer', 'Priority Support'] },
        ],
        faqs: [
            { question: 'Do I need technical skills to manage WordPress?', answer: 'No, we design intuitive admin interfaces and provide training. Managing content is as easy as using a word processor.' },
            { question: 'Is WordPress secure?', answer: 'When properly configured and maintained, WordPress is very secure. We implement multiple security layers and provide ongoing updates.' },
            { question: 'Can you migrate my existing site?', answer: 'Yes, we handle complete migrations from other platforms including content, SEO settings, and redirects to maintain your search rankings.' },
        ],
    },
    'nextjs-react': {
        title: 'Next.js & React Development',
        tagline: 'Modern Web Applications That Scale',
        description: 'High-performance web applications built with cutting-edge technologies for exceptional user experiences.',
        longDescription: [
            'When you need more than a traditional website—a web application that\'s fast, interactive, and scalable—Next.js and React are the gold standard. We build modern applications that deliver exceptional user experiences.',
            'Our expert developers leverage these powerful frameworks to create everything from dynamic marketing sites to complex SaaS platforms, always focusing on performance, SEO, and user experience.',
        ],
        icon: 'nextjs',
        features: [
            { title: 'Custom Web Applications', description: 'Bespoke web applications tailored to your exact business requirements.' },
            { title: 'Headless CMS Integration', description: 'Connect to Sanity, Contentful, Strapi, or any headless CMS for flexible content management.' },
            { title: 'API Development', description: 'RESTful and GraphQL APIs to power your applications and integrations.' },
            { title: 'Performance Optimization', description: 'Server-side rendering, static generation, and optimization for lightning-fast load times.' },
            { title: 'E-commerce Platforms', description: 'Custom e-commerce solutions with headless architecture for maximum flexibility.' },
            { title: 'Full-Stack Solutions', description: 'Complete front-end to back-end development with modern technology stacks.' },
        ],
        benefits: [
            'Blazing-fast performance and page loads',
            'Excellent SEO with server-side rendering',
            'Highly interactive user experiences',
            'Easy to maintain and scale',
            'Future-proof technology stack',
            'Superior developer experience for faster iterations',
        ],
        process: [
            { step: 1, title: 'Technical Discovery', description: 'Define requirements, choose tech stack, and plan architecture.' },
            { step: 2, title: 'Design & Prototype', description: 'Create UI/UX designs and interactive prototypes for validation.' },
            { step: 3, title: 'Agile Development', description: 'Iterative development with regular demos and feedback cycles.' },
            { step: 4, title: 'Testing & Deployment', description: 'Comprehensive testing, performance optimization, and production deployment.' },
        ],
        pricing: [
            { name: 'Marketing Site', price: '£4,999', features: ['Up to 15 Pages', 'CMS Integration', 'Contact Forms', 'SEO Optimized', 'Analytics Setup', '3 Months Support'] },
            { name: 'Web Application', price: '£14,999', features: ['Custom Features', 'User Authentication', 'Database Integration', 'Admin Dashboard', 'API Development', '6 Months Support'], popular: true },
            { name: 'Enterprise', price: 'Custom', features: ['Complex Applications', 'Multiple Integrations', 'Scalable Architecture', 'DevOps Setup', 'Ongoing Development', 'SLA Guarantee'] },
        ],
        faqs: [
            { question: 'When should I choose Next.js over WordPress?', answer: 'Choose Next.js when you need a highly interactive application, have complex functionality requirements, or need maximum performance. WordPress is better for simpler content-focused sites.' },
            { question: 'Can you work with our existing backend?', answer: 'Absolutely. Next.js excels at integrating with existing APIs and backends. We can build a modern frontend that connects to your current systems.' },
            { question: 'Do you provide hosting?', answer: 'We deploy to Vercel (optimal for Next.js), AWS, or your preferred hosting provider. We also set up CI/CD pipelines for seamless updates.' },
        ],
    },
};

// Generate static params for all services
export async function generateStaticParams() {
    return Object.keys(services).map((slug) => ({
        slug,
    }));
}

// Generate metadata for each service
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services[slug];

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} | Brandlyx UK`,
        description: service.description,
        openGraph: {
            title: `${service.title} | Brandlyx`,
            description: service.description,
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services[slug];

    if (!service) {
        notFound();
    }

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 grid-background" />
                <div className="absolute top-20 right-10 w-[500px] h-[500px] orb orb-primary animate-pulse-glow" />
                <div className="absolute bottom-10 left-10 w-[400px] h-[400px] orb orb-accent animate-pulse-glow" style={{ animationDelay: '2s' }} />

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-6"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Services
                        </Link>
                        <h1 className="hero-title mb-4 animate-slide-up">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-6 animate-slide-up stagger-1">
                            {service.tagline}
                        </p>
                        <div className="flex flex-wrap gap-4 animate-slide-up stagger-2">
                            <GlassButton href="/contact" variant="accent" size="lg">
                                Get a Free Quote
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </GlassButton>
                            <GlassButton href="tel:+442012345678" variant="glass" size="lg">
                                Book a Call
                            </GlassButton>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Description Section */}
            <section className="py-16">
                <Container>
                    <div className="max-w-3xl">
                        {service.longDescription.map((paragraph, index) => (
                            <p key={index} className="text-lg text-slate-300 mb-6 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Features Section */}
            <section className="section-padding relative">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] orb orb-secondary opacity-20" />

                <Container className="relative z-10">
                    <h2 className="section-title text-center mb-4">
                        What&apos;s <span className="gradient-text">Included</span>
                    </h2>
                    <p className="section-subtitle text-center max-w-2xl mx-auto mb-12">
                        Our {service.title.toLowerCase()} services are comprehensive and tailored to your specific needs.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, index) => (
                            <GlassCard key={feature.title} className="h-full" padding="lg">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400 text-sm">{feature.description}</p>
                            </GlassCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="section-title mb-6">
                                Why Choose Our <span className="gradient-text">{service.title}</span>
                            </h2>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mt-0.5">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-slate-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass-card-static p-8 rounded-3xl">
                            <h3 className="text-xl font-bold text-white mb-6">Our Process</h3>
                            <div className="space-y-6">
                                {service.process.map((step) => (
                                    <div key={step.step} className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white">
                                            {step.step}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                                            <p className="text-slate-400 text-sm">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Pricing Section */}
            <section className="section-padding">
                <Container>
                    <h2 className="section-title text-center mb-4">
                        <span className="gradient-text">Investment</span> Options
                    </h2>
                    <p className="section-subtitle text-center max-w-2xl mx-auto mb-12">
                        Transparent pricing with no hidden fees. Choose the package that fits your needs.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {service.pricing.map((plan) => (
                            <GlassCard
                                key={plan.name}
                                className={`h-full relative ${plan.popular ? 'border-cyan-500/50' : ''}`}
                                padding="lg"
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-xs font-medium text-white">
                                        Most Popular
                                    </div>
                                )}
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                    <div className="text-3xl font-bold gradient-text">{plan.price}</div>
                                    <p className="text-slate-500 text-sm">per month</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                                            <svg className="w-4 h-4 text-cyan-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <GlassButton
                                    href="/contact"
                                    variant={plan.popular ? 'accent' : 'glass'}
                                    className="w-full justify-center"
                                >
                                    Get Started
                                </GlassButton>
                            </GlassCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="section-padding">
                <Container>
                    <h2 className="section-title text-center mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="section-subtitle text-center max-w-2xl mx-auto mb-12">
                        Have questions? We&apos;ve got answers. If you don&apos;t see your question here, feel free to contact us.
                    </p>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {service.faqs.map((faq, index) => (
                            <GlassCard key={index} padding="md">
                                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                                <p className="text-slate-400">{faq.answer}</p>
                            </GlassCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <Container>
                    <div className="glass-card-static p-12 rounded-3xl text-center max-w-3xl mx-auto relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-violet-500/10" />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Ready to Get Started with {service.title}?
                            </h2>
                            <p className="text-slate-400 mb-8">
                                Book a free consultation and let&apos;s discuss how we can help your business grow.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <GlassButton href="/contact" variant="accent" size="lg">
                                    Book Free Consultation
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </GlassButton>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
