'use client'

import React from 'react'
import { motion } from 'motion/react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { BigBoostMetricsSection } from '@/components/bigboost-metrics'

export default function BigBoostProductPage() {
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
                                    AI Media Platform
                                </motion.div>
                                
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-5xl md:text-7xl font-bold tracking-tight"
                                >
                                    BigBoost
                                </motion.h1>
                                
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl lg:mx-0 mx-auto"
                                >
                                    Nigeria&apos;s and West Africa’s #1 AI Social Media Agency. We bridge the gap between human creativity and algorithmic growth.
                                </motion.p>
                                
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-wrap lg:justify-start justify-center gap-4"
                                >
                                    <div className="bg-foreground/5 rounded-[calc(var(--radius-lg)+0.125rem)] border p-0.5">
                                        <Button asChild size="lg" className="rounded-lg px-8 py-6 font-bold shadow-xl transition-all hover:scale-105">
                                            <Link href="https://bigboost.com.ng" target="_blank">
                                                Explore bigboost.com.ng <ArrowRight className="ml-2 size-4" />
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
                                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-primary/10 bg-white flex items-center justify-center p-12">
                                    <Image 
                                        src="/bigboost-logo.jpg" 
                                        alt="BigBoost Media Hub" 
                                        width={400}
                                        height={400}
                                        className="object-contain"
                                        priority
                                    />
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
                                <h2 className="text-3xl font-bold tracking-tight">The Growth Engine</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    BigBoost Media Hub is more than an agency—it is an AI-driven growth ecosystem. We identified that businesses in West Africa needed a bridge between traditional engagement and the high-speed data requirements of modern social platforms.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold tracking-tight">Enterprise Infrastructure</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Beyond media growth, we provide critical SMS verification and secure identity services for regional platforms. BigBoost is the infrastructure that allows digital agencies to scale with confidence and security.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CORE CAPABILITIES */}
                <section className="py-24 bg-muted/20 border-y border-muted/50">
                    <div className="mx-auto max-w-6xl px-6">
                        <h2 className="text-center text-4xl font-bold mb-16">Why BigBoost?</h2>
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            <div className="space-y-4">
                                <div className="mx-auto size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Sparkles className="size-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">AI Social Agency</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Algorithmic growth strategies designed for West Africa&apos;s unique digital landscape.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="mx-auto size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <MessageSquare className="size-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">SMS Verification</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Secure, high-speed identity verification services for local and global platforms.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="mx-auto size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <ShieldCheck className="size-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Scale Securely</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Verified infrastructure that protects your brand and your users.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* METRICS */}
                <BigBoostMetricsSection />
            </main>
            
            <FooterSection />
        </div>
    )
}
