import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap, Shield, Globe, Network } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-24 md:py-32 dark:bg-transparent border-t border-muted/50">
            <div className="@container mx-auto max-w-6xl px-6">
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Foundational Systems Engineering.</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Big7 Technologies builds the fundamental layers of modern computing. We ship reliable, high-scale systems that power the next generation of digital infrastructure.
                    </p>
                </div>
                
                <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-16 grid max-w-sm divide-y overflow-hidden shadow-sm *:text-center">
                    <div className="group p-8">
                        <CardHeader className="pb-3">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Network className="size-6" />
                            </div>
                            <h3 className="font-bold text-lg">Distributed Systems</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">Designing consensus models and high-availability systems for large-scale data orchestration.</p>
                        </CardContent>
                    </div>

                    <div className="group p-8">
                        <CardHeader className="pb-3">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Shield className="size-6" />
                            </div>
                            <h3 className="font-bold text-lg">Sovereign Design</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">Building hardened networking and security layers designed for continental data trust.</p>
                        </CardContent>
                    </div>

                    <div className="group p-8">
                        <CardHeader className="pb-3">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Sparkles className="size-6" />
                            </div>
                            <h3 className="font-bold text-lg">Growth Platforms</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">Engineering the underlying compute and logic that drives the next generation of AI-driven tools.</p>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </section>
    )
}
