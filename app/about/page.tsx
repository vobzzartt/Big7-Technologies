'use client'

import React from 'react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Server, Database, Network, Shield, Cpu, Anchor, Globe, Sparkles, Compass, Eye, Target, Brain, Terminal, Settings } from 'lucide-react'

export default function AboutPage() {
    return (
        <>
            <HeroHeader />
            <main className="min-h-screen pt-24 md:pt-32 pb-24 bg-zinc-50 dark:bg-transparent">
                <div className="mx-auto max-w-5xl px-6 space-y-32">
                    
                    {/* Origin Story Header */}
                    <div className="space-y-12 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 text-zinc-100 text-[10px] font-bold uppercase tracking-[0.2em] border border-zinc-800">
                            The Origin
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
                            Breaking the cycle of <br className="hidden md:block" /> infrastructure dependency.
                        </h1>
                        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed max-w-3xl">
                            <p>
                                Big7 Technologies was born from a singular observation by Victor Bodude: Africa&apos;s digital future is being built on foundations it does not own. 
                            </p>
                            <p>
                                After witnessing the fragility of decaying regional systems and the continent&apos;s overwhelming reliance on foreign infrastructure, Victor founded the Lab in 2024 to build something different—sovereign systems built from the core up.
                            </p>
                        </div>
                    </div>

                    {/* Mission & Vision Grid */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-12 rounded-[2.5rem] bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-6">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit">
                                <Target className="size-6" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight">Our Mission</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                To engineer the foundational infrastructure behind large-scale fintech, cloud systems, and distributed networks, ensuring Africa owns the core layers of its digital economy.
                            </p>
                        </div>
                        <div className="p-12 rounded-[2.5rem] bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-6">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit">
                                <Eye className="size-6" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Our Vision</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                To anchor the next decade of African technology by building robust, high-performance systems that eliminate dependency on foreign system layers and external compute nodes.
                            </p>
                        </div>
                    </div>

                    {/* The "Why" Section */}
                    <div className="grid md:grid-cols-2 gap-16 items-center border-y border-zinc-200 dark:border-zinc-800 py-24">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">Why We Build.</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Infrastructure is not just about servers and code; it is about sovereignty. When a continent depends on foundational protocols and external data orchestration, its growth is capped by the interests of outsiders.
                                </p>
                                <p>
                                    At Big7, we build at the base layer because that is where the real impact happens. By optimizing the foundational protocols of fintech and cloud infrastructure, we create a platform for the next generation of African builders to scale without limits.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 text-center space-y-4 group hover:border-primary/50 transition-colors">
                                <Server className="size-8 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Cloud Computing</span>
                            </div>
                            <div className="aspect-square rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 text-center space-y-4 group hover:border-primary/50 transition-colors">
                                <Network className="size-8 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Blockchain</span>
                            </div>
                            <div className="aspect-square rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 text-center space-y-4 group hover:border-primary/50 transition-colors">
                                <Brain className="size-8 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">AI</span>
                            </div>
                            <div className="aspect-square rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 text-center space-y-4 group hover:border-primary/50 transition-colors">
                                <Settings className="size-8 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">System Engr</span>
                            </div>
                        </div>
                    </div>

                    {/* Team Callout */}
                    <div className="space-y-12 text-center pb-12">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-4xl font-bold tracking-tight">Built by a lean team of 03 engineers.</h2>
                            <p className="text-muted-foreground text-lg">
                                We are a research-driven lab focused on quality over quantity. Every line of code is written to withstand the demands of global-scale systems.
                            </p>
                        </div>
                        <div className="inline-flex items-center gap-6 p-2 pr-6 rounded-full bg-muted/30 border border-muted/50">
                            <div className="size-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-xs tracking-widest">VB</div>
                            <div className="text-left">
                                <p className="text-sm font-bold">Victor Bodude</p>
                                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Founder & Systems Lead</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <FooterSection />
        </>
    )
}
