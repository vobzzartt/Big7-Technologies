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
                
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="rounded-lg px-10 py-6 h-auto text-base font-bold border-muted-foreground/20 hover:bg-muted/10">
                        <Link href="https://research.big7technologies.com">
                            Explore Research
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="rounded-lg px-10 py-6 h-auto text-base font-bold border-muted-foreground/20 hover:bg-muted/10">
                        <a href="mailto:hello@big7technologies.com">
                            Collaborate With Us
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
