import Link from 'next/link';
import Container from '@/components/ui/Container';
import GlassButton from '@/components/ui/GlassButton';

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 grid-background opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orb orb-primary opacity-20" />

            <Container className="relative z-10 text-center">
                <h1 className="text-[12rem] font-black text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    404
                </h1>
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Lost in Space?</h2>
                    <p className="text-slate-400 text-lg max-w-md mx-auto">
                        The page you are looking for has floated away or never existed.
                        Let&apos;s get you back to safety.
                    </p>
                    <div className="flex justify-center gap-4">
                        <GlassButton href="/" variant="accent">Back to Home</GlassButton>
                        <GlassButton href="/contact" variant="glass">Report an Issue</GlassButton>
                    </div>
                </div>
            </Container>
        </section>
    );
}
