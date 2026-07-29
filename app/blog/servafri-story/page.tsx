'use client'

import React from 'react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export default function ServafriStoryPage() {
    const post = {
        title: "Rebuilding Africa’s Cloud Future — The ServAfri Story",
        date: "October 13, 2025",
        author: "Victor Bodude",
        readTime: "6 min read",
        content: `
            <p>Every African developer who has tried deploying a real app knows this pain. High latency from servers in London or Virginia, complex payment systems, and the high cost of foreign cloud providers. This is the gap that led to ServAfri.</p>

            <h2>What ServAfri Represents</h2>
            <p>ServAfri is a cloud platform created specifically for Africa. The goal is simple: make cloud hosting easier, faster, and affordable for developers and startups on the continent.</p>
            <p>The name ServAfri means “Servers for Africa,” and it captures the heart behind the project. It’s not just a tech product. It’s a mission.</p>

            <h2>The Vision Behind ServAfri</h2>
            <p>ServAfri was born from one belief: Africa deserves its own cloud. Infrastructure that understands our reality, our economy, and the challenges we face—not something imported and adjusted.</p>
            
            <p>We build world-class software here, but the infrastructure powering everything isn’t ours. That’s the cycle ServAfri wants to break.</p>

            <h2>The Story of ServAfri’s Rebirth</h2>
            <p>ServAfri existed before 2024, but the project went silent. The dream paused, not cancelled. In 2025, at age 18, I brought it back with a clearer purpose. Not because I wanted a company, but because I wanted to solve the struggles developers like me face every single day.</p>
            <p>Africa doesn’t just need more apps; it needs the infrastructure powering those apps. Those engines behind the scenes that nobody sees but everyone depends on. That’s what ServAfri exists to be.</p>

            <blockquote>
                “When I came across the name ServAfri, it felt bigger than a brand. It felt like a space waiting to be created—a cloud forming over Africa’s digital sky.”
            </blockquote>

            <p>The heart of ServAfri is Africa. Every decision is shaped around our reality: local payments, localized support, and data centers physically located on the continent for the lowest possible latency.</p>

            <p>Cloud is a multi-billion-dollar industry. Yet almost all the money leaves the continent. ServAfri wants to help change that by creating jobs, training more African cloud engineers, increasing data sovereignty, and keeping more value within our borders.</p>

            <p>ServAfri is more than servers and dashboards. It’s Africa taking control of its digital future—one cloud at a time.</p>
        `
    }

    return (
        <>
            <HeroHeader />
            <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32">
                <article className="mx-auto max-w-3xl px-6">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
                        <ArrowLeft className="w-4 h-4" /> Back to blog
                    </Link>

                    <div className="space-y-4 mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <time>{post.date}</time>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>

                    <div 
                        className="prose prose-zinc dark:prose-invert max-w-none prose-lg
                        prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
                        prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:my-12 prose-blockquote:text-foreground"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </main>
            <FooterSection />
        </>
    )
}
