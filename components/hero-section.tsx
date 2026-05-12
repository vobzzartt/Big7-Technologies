'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Cloud, Cpu, Code, Layers, Shield, Zap, Database, Smartphone, Globe, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { HeroHeader } from './header'

const marqueeItems = [
    { icon: <Database className="size-4" />, name: "Stablecoin Protocols" },
    { icon: <Cloud className="size-4" />, name: "Cloud Computing" },
    { icon: <CreditCard className="size-4" />, name: "Fintech Systems" },
    { icon: <Layers className="size-4" />, name: "Blockchain Architecture" },
    { icon: <Smartphone className="size-4" />, name: "Embedded Systems" },
    { icon: <Shield className="size-4" />, name: "Hardware Security" },
    { icon: <Cpu className="size-4" />, name: "High-Density Compute" },
    { icon: <Globe className="size-4" />, name: "Edge Networking" },
    { icon: <Code className="size-4" />, name: "AI Infrastructure" }
]

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden w-full">
                <section className="relative pt-24 md:pt-36 pb-20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_75%)] opacity-[0.03] -z-10 blur-3xl" />
                    
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center max-w-4xl mx-auto">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 text-zinc-100 text-[10px] font-bold uppercase tracking-[0.2em] border border-zinc-800 mb-8"
                            >
                                Parent Tech Company
                            </motion.div>
                            
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                                Engineering the Core Layers of Modern Technology
                            </h1>
                            
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
                                Big7 Technologies is a systems engineering company building the foundational infrastructure behind large-scale fintech, cloud infrastructure, and distributed systems.
                            </p>

                            <div className="flex flex-col items-center justify-center gap-4 md:flex-row mb-24">
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
                                    <Link href="/products">
                                        View Products
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Research Area Marquee */}
                        <div className="relative py-12 border-y border-muted/50 overflow-hidden">
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
                            
                            <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 mb-8">Foundational Technology Areas</p>
                            
                            <div className="flex animate-marquee whitespace-nowrap gap-12">
                                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-muted-foreground grayscale hover:grayscale-0 transition-all cursor-default">
                                        <div className="p-2 rounded-md bg-muted/20 border border-muted/30">
                                            {item.icon}
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </>
    )
}
