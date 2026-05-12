export default function StatsSection() {
    return (
        <section className="py-24 md:py-32 border-t border-muted/50">
            <div className="mx-auto max-w-6xl space-y-16 px-6">
                <div className="max-w-2xl space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Company Statistics</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Big7 Technologies is a fast-moving engineering firm focused on shipping high-impact systems. Our small, dedicated team drives the infrastructure behind a growing ecosystem of products.
                    </p>
                </div>

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pt-12">
                    <div className="space-y-3 border-l pl-8 border-primary/20">
                        <div className="text-5xl font-bold tracking-tighter">2024</div>
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Founded</p>
                    </div>
                    <div className="space-y-3 border-l pl-8 border-primary/20">
                        <div className="text-5xl font-bold tracking-tighter">03</div>
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Engineers</p>
                    </div>
                    <div className="space-y-3 border-l pl-8 border-primary/20">
                        <div className="text-5xl font-bold tracking-tighter">04</div>
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Products Developed</p>
                    </div>
                    <div className="space-y-3 border-l pl-8 border-primary/20">
                        <div className="text-5xl font-bold tracking-tighter text-primary">$0.000</div>
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Total Funding</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
