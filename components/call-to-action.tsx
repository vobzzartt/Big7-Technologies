import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-24 md:py-32 border-t border-muted/50">
            <div className="mx-auto max-w-4xl px-6 text-center space-y-12">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Advancing the Core Layers of Computing.</h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Join the Big7 Research Lab. We are building the foundational systems that power the next generation of sovereign infrastructure and AI models.
                    </p>
                </div>
                
                <div className="flex flex-row items-center justify-center gap-3">
                    <Button
                        asChild
                        variant="outline"
                        className="rounded-full px-5 py-2.5 h-auto text-[13px] md:text-base md:px-10 md:py-6 font-bold border-muted-foreground/20 hover:bg-muted/10 transition-all active:scale-95">
                        <Link href="https://research.big7technologies.com">
                            Research
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="rounded-full px-5 py-2.5 h-auto text-[13px] md:text-base md:px-10 md:py-6 font-bold border-muted-foreground/20 hover:bg-muted/10 transition-all active:scale-95">
                        <a href="mailto:hello@big7technologies.com">
                            Collaborate
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
