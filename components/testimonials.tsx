"use client";

import { useEffect, useState } from "react";

const testimonials = [
    {
        quote:
            "Big7 Technologies has built a remarkably resilient foundation for regional systems. Their focus on the core layers of infrastructure has directly informed how we approach high-scale transaction security.",
        name: "Tunde Adebayo",
        role: "Senior Engineering Lead, Paystack",
        initials: "TA"
    },
    {
        quote:
            "The depth of expertise the Big7 team brings to distributed consensus and sovereign networking is world-class. Their ecosystem contributions have set a high bar for engineering excellence in West Africa.",
        name: "James Oliver",
        role: "Staff Engineer, Visa",
        initials: "JO"
    },
    {
        quote:
            "Working with the foundational systems developed at the Big7 Lab has allowed us to think differently about latency and infrastructure sovereignty. They are building for the next decade of finance.",
        name: "Adewale Johnson",
        role: "Head of Infrastructure, Kuda",
        initials: "AJ"
    },
    {
        quote:
            "Big7 Technologies consistently delivers at the intersection of performance and security. Their architectural insights have been invaluable to our ecosystem's growth.",
        name: "Sarah Williams",
        role: "Systems Architect, GTBank",
        initials: "SW"
    },
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent((c) => (c + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="py-24 md:py-32 bg-muted/10 border-y border-muted/50">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-3xl relative min-h-[300px] flex items-center">
                    {testimonials.map((testimonial, idx) => (
                        <blockquote
                            key={testimonial.name}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col justify-center ${
                                idx === current ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-4 z-0 pointer-events-none"
                            }`}
                            aria-hidden={idx !== current}
                        >
                            <p className="text-xl font-medium sm:text-2xl md:text-3xl tracking-tight leading-relaxed italic text-zinc-800 dark:text-zinc-200">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>
                            <div className="mt-12 flex items-center gap-6">
                                <div className="size-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-xs tracking-widest border border-zinc-800">
                                    {testimonial.initials}
                                </div>
                                <div className="space-y-1">
                                    <cite className="font-bold not-italic text-sm uppercase tracking-widest">{testimonial.name}</cite>
                                    <span className="text-muted-foreground block text-xs font-medium">{testimonial.role}</span>
                                </div>
                            </div>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
