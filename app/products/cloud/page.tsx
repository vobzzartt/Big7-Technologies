'use client'

import React from 'react'
import { motion } from 'motion/react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, Cloud, Globe, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { MetricsSection } from '@/components/metrics-section'

export default function CloudProductPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <HeroHeader />
            
            <main className="relative">
                {/* HERO SECTION */}
                <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-[0.05] -z-10 blur-3xl" />
                    
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:text-left text-center">
                            <div className="flex-1 space-y-8">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="inline-flex items-center gap-2 px-4 py-1 rounded-md bg-zinc-900 text-zinc-100 text-[10px] font-bold uppercase tracking-[0.2em] border border-zinc-800"
                                >
                                    Core Infrastructure
                                </motion.div>
                                
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-5xl md:text-7xl font-bold tracking-tight"
                                >
                                    Big7 Cloud
                                </motion.h1>
                                
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl lg:mx-0 mx-auto"
                                >
                                    Fast, reliable cloud infrastructure with low latency across Africa. Building the digital foundation for a sovereign continent.
                                </motion.p>
                                
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-wrap lg:justify-start justify-center gap-4"
                                >
                                    <div className="bg-foreground/5 rounded-[calc(var(--radius-lg)+0.125rem)] border p-0.5">
                                        <Button asChild size="lg" className="rounded-lg px-8 py-6 font-bold shadow-xl transition-all hover:scale-105">
                                            <Link href="https://big7technologies.com" target="_blank">
                                                Explore big7technologies.com <ArrowRight className="ml-2 size-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7 }}
                                className="flex-1 w-full max-w-2xl mx-auto"
                            >
                                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-primary/10 bg-primary/5">
                                    <Image 
                                        src="/Big7 Technologies-hero.jpg" 
                                        alt="Big7 Cloud Infrastructure" 
                                        fill 
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* THE STORY SECTION */}
                <section className="py-24 border-t">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid lg:grid-cols-2 gap-20">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold tracking-tight">The History</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Founded in 2024, Big7 Technologies was born from a vision to localize high-performance computing on the continent. Established to bridge the infrastructure gap, ensuring that African innovators have the speed and reliability required to build global-scale applications.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold tracking-tight">Bridging the Africa Cloud Gap</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    In the heart of Africa's digital revolution, we identified a massive infrastructure gap. Developers were forced to rely on distant servers, leading to slow performance and complex global payment hurdles.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Big7 Cloud was built to bridge this divide—creating a localized, sovereign cloud engine that allows the continent's engineers to deploy, scale, and innovate on home soil without friction.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE Big7 Technologies */}
                <section className="py-24 bg-muted/20 border-y border-muted/50">
                    <div className="mx-auto max-w-6xl px-6">
                        <h2 className="text-center text-4xl font-bold mb-16">Why Choose Big7 Cloud?</h2>
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            <div className="space-y-4">
                                <div className="mx-auto size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Globe className="size-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Low Latency</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Fast, reliable cloud infrastructure with low latency across Africa.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="mx-auto size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Cloud className="size-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Flexible Billing</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Local Payments, Pay-as-you-go, and subscription models built for you.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="mx-auto size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <CheckCircle2 className="size-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Scale Without Limits</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Deploy, manage, and grow your applications with ease.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* METRICS */}
                <MetricsSection />
            </main>
            
            <FooterSection />
        </div>
    )
}
