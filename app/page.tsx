import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

const services = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that drive traffic, engagement, and conversions for UK businesses.',
    icon: 'digital-marketing',
    href: '/services/digital-marketing',
    features: ['PPC Advertising', 'Social Media Marketing', 'Email Campaigns'],
  },
  {
    id: 'seo',
    title: 'SEO Services',
    description: 'Dominate Google search results with our proven SEO strategies tailored for the UK market.',
    icon: 'seo',
    href: '/services/seo',
    features: ['Technical SEO', 'Local SEO', 'Link Building'],
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Compelling content that tells your story and engages your target audience.',
    icon: 'content-creation',
    href: '/services/content-creation',
    features: ['Blog Writing', 'Video Production', 'Copywriting'],
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Streamline your workflows with intelligent automation solutions that save time and reduce costs.',
    icon: 'automation',
    href: '/services/automation',
    features: ['Workflow Automation', 'CRM Integration', 'Lead Scoring'],
  },
  {
    id: 'chatbot-development',
    title: 'Chatbot Development',
    description: 'AI-powered chatbots that provide 24/7 customer support and qualify leads automatically.',
    icon: 'chatbot',
    href: '/services/chatbot-development',
    features: ['AI Chatbots', 'Live Chat Integration', 'Lead Qualification'],
  },
  {
    id: 'wordpress',
    title: 'WordPress Websites',
    description: 'Custom WordPress websites that are fast, secure, and easy to manage.',
    icon: 'wordpress',
    href: '/services/wordpress',
    features: ['Custom Themes', 'E-commerce', 'Speed Optimization'],
  },
  {
    id: 'nextjs-react',
    title: 'Next.js / React',
    description: 'Modern, high-performance web applications built with cutting-edge technologies.',
    icon: 'nextjs',
    href: '/services/nextjs-react',
    features: ['App Development', 'API Integration', 'Headless CMS'],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        badge="🇬🇧 Premier UK Digital Agency"
        title="Transform Your Business with"
        titleHighlight="Digital Excellence"
        subtitle="We help UK businesses dominate their markets through innovative digital marketing, SEO, web development, and automation solutions. Serving London, Manchester, and beyond."
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Our Work", href: "/portfolio" }}
      />

      {/* Services Section */}
      <ServicesGrid
        title="Our Services"
        subtitle="Comprehensive digital solutions tailored for UK businesses. From SEO to custom web development, we've got you covered."
        services={services}
      />

      {/* About Section */}
      <AboutSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
