import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

// Mock post for template development
const posts: Record<string, any> = {
    'local-seo-london-2026': {
        title: 'How to Dominate Local SEO in London for 2026',
        category: 'SEO',
        author: 'Alex Reed',
        date: 'Jan 5, 2026',
        content: [
            'London is one of the most competitive markets in the world. To win at SEO here, you need more than just keywords. You need a deep understanding of local intent, authority building, and technical excellence.',
            'In this guide, we break down the top three factors that will influence London search rankings in 2026.',
            '1. Hyper-local Content: Focus on specific boroughs and neighborhoods. Instead of targeting "SEO London", target "SEO Services in Camden" or "Digital Marketing for Shoreditch Startups".',
            '2. Video SEO: Google is increasingly favoring video snippets in local search results. Create short, informative videos about your services and optimize them for local terms.',
            '3. AI-Driven Personalization: Use data to understand how Londoners interact with your site and optimize the user journey accordingly.',
        ],
        relatedPosts: [
            { title: 'Why Next.js is the Best Framework', slug: 'why-nextjs-for-agencies' },
            { title: 'Implementing AI Chatbots', slug: 'ai-chatbots-marketing-funnel' },
        ]
    }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = posts[slug];
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | Brandlyx Blog`,
        description: post.content[0].substring(0, 160),
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts[slug];

    if (!post) notFound();

    return (
        <article className="pt-32 pb-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold mb-6 hover:gap-3 transition-all">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Blog
                        </Link>
                        <div className="flex justify-center gap-4 text-xs text-slate-500 uppercase tracking-widest mb-4 font-bold">
                            <span>{post.category}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white text-xs">
                                {post.author.split(' ').map((n: string) => n[0]).join('')}
                            </div>
                            <span className="text-white font-medium">{post.author}</span>
                        </div>
                    </div>

                    {/* Featured Image Placeholder */}
                    <div className="aspect-[21/9] rounded-3xl overflow-hidden glass-card mb-12 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-16">
                        {post.content.map((p: string, i: number) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>

                    {/* Share & Tags */}
                    <div className="flex flex-col sm:flex-row justify-between items-center py-8 border-y border-white/5 mb-16 gap-6">
                        <div className="flex items-center gap-4">
                            <span className="text-slate-500 text-sm font-bold">Share:</span>
                            {['Twitter', 'LinkedIn', 'Facebook'].map(s => (
                                <button key={s} className="text-slate-400 hover:text-white transition-colors text-sm">{s}</button>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            {['SEO', 'London', '2026'].map(t => (
                                <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">#{t}</span>
                            ))}
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8">Continue Reading</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {post.relatedPosts.map((rp: any) => (
                                <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                                    <GlassCard className="h-full group" padding="lg">
                                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{rp.title}</h4>
                                        <div className="mt-4 flex items-center gap-2 text-cyan-400 text-sm font-medium">
                                            Read More →
                                        </div>
                                    </GlassCard>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </article>
    );
}
