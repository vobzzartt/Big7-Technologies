'use client'

import React from 'react'
import { motion } from 'motion/react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, Cloud, Globe, Cpu, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <HeroHeader />

            <main className="relative pt-32 pb-24 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10 blur-3xl opacity-50" />

                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                        >
                            Our Products
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground leading-relaxed"
                        >
                            Translating systems research into world-class infrastructure. We build tools that empower developers and enterprises across the continent.
                        </motion.p>
                    </div>

                    <div className="grid gap-12">
                        {/* Big7 Cloud Product Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="group relative overflow-hidden rounded-[2.5rem] border border-muted bg-muted/20 transition-all hover:border-primary/50"
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-12 p-8 md:p-12">
                                <div className="flex-1 space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 text-zinc-100 text-[10px] font-bold uppercase tracking-[0.2em] border border-zinc-800">
                                        Core Infrastructure
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Big7 Cloud</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Fast, reliable, and sovereign cloud infrastructure localized for the continent. Deploy high-density compute and scalable networks with ease.
                                    </p>
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <Button asChild className="rounded-xl px-8">
                                            <Link href="/products/cloud">
                                                Learn More <ArrowRight className="ml-2 size-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="outline" asChild className="rounded-xl px-8">
                                            <Link href="https://big7technologies.com" target="_blank">
                                                Visit big7technologies.com
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex-1 w-full max-w-lg">
                                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-primary/10 shadow-2xl">
                                        <Image 
                                            src="/Big7 Technologies-hero.jpg"
                                            alt="Big7 Cloud Product Preview"
                                            fill
                                        <p className="text-2xl font-bold">{'<'}1.2ms</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* BigBoost Product Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="group relative overflow-hidden rounded-[2rem] border bg-card/30 backdrop-blur-sm transition-all hover:border-primary/30"
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-12 p-8 md:p-16">
                                <div className="flex-1 space-y-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 text-zinc-100 text-[10px] font-bold uppercase tracking-[0.2em] border border-zinc-800">
                                        <Sparkles className="size-3" />
                                        <span>AI Media Platform</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">BigBoost Media Hub</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                                        Nigeria&apos;s and West Africa’s #1 AI Social Media Agency. Bridging the gap between human creativity and algorithmic growth with secure identity services.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <Button asChild size="lg" className="rounded-lg px-6 py-4 h-auto text-base font-bold shadow-lg transition-all hover:scale-105">
                                            <Link href="/products/bigboost">
                                                Learn More <ArrowRight className="ml-2 size-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="outline" size="lg" className="rounded-lg px-6 py-4 h-auto text-base font-bold" asChild>
                                            <Link href="https://bigboost.com.ng" target="_blank">
                                                Explore <Globe className="ml-2 size-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex-1 relative w-full aspect-square lg:aspect-auto lg:h-[500px]">
                                    <div className="absolute inset-0 bg-primary/5 rounded-3xl overflow-hidden border border-primary/10 group-hover:scale-[1.02] transition-transform duration-700 bg-white flex items-center justify-center p-8">
                                        <Image
                                            src="/bigboost-logo.jpg"
                                            alt="BigBoost Product Preview"
                                            width={350}
                                            height={350}
                                            className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Future Product Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-dashed bg-muted/5 p-12 text-center"
                        >
                            <div className="max-w-md mx-auto space-y-4">
                                <Cpu className="size-12 mx-auto text-muted-foreground/30" />
                                <h3 className="text-2xl font-bold text-muted-foreground/50">More in the Lab</h3>
                                <p className="text-muted-foreground/40">
                                    We are currently researching and developing several new systems to improve the digital foundation of Africa. Stay tuned.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <FooterSection />
        </div>
    )
}
