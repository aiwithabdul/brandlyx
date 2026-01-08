import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

export const metadata: Metadata = {
    title: 'Blog | Insightful Digital Trends & Strategies | Brandlyx',
    description: 'Explore the latest insights on SEO, digital marketing, AI, and web development from the Brandlyx team. Stay ahead of the digital curve.',
};

// Mock data since we just set up Sanity
const mockPosts = [
    {
        title: 'How to Dominate Local SEO in London for 2026',
        slug: 'local-seo-london-2026',
        excerpt: 'Discover the latest strategies for ranking in the capital, from GMB optimization to local authority building.',
        date: 'Jan 5, 2026',
        category: 'SEO',
        author: 'Alex Reed',
        image: '/blog/seo-london.jpg'
    },
    {
        title: 'Why Next.js is the Best Framework for Agency Websites',
        slug: 'why-nextjs-for-agencies',
        excerpt: 'Performance, SEO, and developer experience. Why we choose Next.js for all our premium projects.',
        date: 'Jan 2, 2026',
        category: 'Development',
        author: 'Sarah Chen',
        image: '/blog/nextjs-benefits.jpg'
    },
    {
        title: 'Implementing AI Chatbots in Your Marketing Funnel',
        slug: 'ai-chatbots-marketing-funnel',
        excerpt: 'How to automate lead qualification and customer support without losing the personal touch.',
        date: 'Dec 28, 2025',
        category: 'Automation',
        author: 'James Wilson',
        image: '/blog/ai-chatbots.jpg'
    }
];

export default function BlogPage() {
    return (
        <>
            {/* Blog Hero */}
            <section className="pt-44 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 grid-background opacity-20" />
                <Container className="relative z-10 text-center">
                    <h1 className="hero-title mb-6 animate-slide-up">
                        Digital <span className="gradient-text">Insights</span>
                    </h1>
                    <p className="section-subtitle max-w-2xl mx-auto animate-slide-up stagger-1">
                        Articles, guides, and news compiled by the Brandlyx team to help your business grow in the digital age.
                    </p>
                </Container>
            </section>

            {/* Featured Post Placeholder */}
            <section className="pb-16">
                <Container>
                    <GlassCard className="group overflow-hidden" padding="none">
                        <div className="grid lg:grid-cols-2">
                            <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-4xl font-bold uppercase tracking-widest">Featured</div>
                            </div>
                            <div className="p-8 lg:p-12 space-y-4">
                                <div className="text-cyan-400 font-bold text-sm uppercase tracking-widest">Featured Post</div>
                                <h2 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {mockPosts[0].title}
                                </h2>
                                <p className="text-slate-400">
                                    {mockPosts[0].excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-slate-500 text-sm">
                                    <span>{mockPosts[0].author}</span>
                                    <span>•</span>
                                    <span>{mockPosts[0].date}</span>
                                </div>
                                <div className="pt-4">
                                    <GlassButton href={`/blog/${mockPosts[0].slug}`} variant="accent">Read Full Article</GlassButton>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </Container>
            </section>

            {/* Post Grid */}
            <section className="section-padding">
                <Container>
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white">Latest Posts</h2>
                        </div>
                        <div className="hidden md:flex gap-4">
                            {['All', 'SEO', 'Development', 'Marketing', 'Automation'].map((cat) => (
                                <button key={cat} className="text-sm text-slate-400 hover:text-white transition-colors">{cat}</button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {mockPosts.map((post, i) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <GlassCard className="h-full group" padding="none">
                                    <div className="aspect-video bg-white/5 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="px-2 py-1 rounded bg-cyan-500 text-white text-[10px] font-bold uppercase">{post.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-slate-500">
                                            <span>{post.author}</span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="mt-16 flex justify-center gap-2">
                        <button className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center">1</button>
                        <button className="w-10 h-10 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors flex items-center justify-center">2</button>
                        <button className="w-10 h-10 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors flex items-center justify-center">3</button>
                    </div>
                </Container>
            </section>

            {/* Newsletter CTA */}
            <section className="section-padding bg-white/5">
                <Container>
                    <div className="max-w-4xl mx-auto glass-card p-12 rounded-3xl text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Subscribe to our newsletter to receive the latest digital trends,
                            case studies, and agency updates directly in your inbox. No spam, ever.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow bg-white/10 border border-white/10 rounded-xl px-6 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                            />
                            <GlassButton variant="accent">Subscribe</GlassButton>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    );
}
