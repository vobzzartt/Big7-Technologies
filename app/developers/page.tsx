import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Code, Terminal, Cpu, Globe, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Developers | ServAfri',
  description: 'APIs, CLIs, SDKs, and integrations. Build your next great app on ServAfri.',
}

export default function DevelopersPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32">
        <section className="mx-auto max-w-7xl px-6">
          <div className="space-y-6 max-w-3xl mb-16 md:mb-24">
            <h1 className="text-4xl font-semibold lg:text-6xl tracking-tight">Developers</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to build, deploy, and scale on Africa's fastest cloud. Explore our APIs, SDKs, and developer tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="p-8 rounded-2xl border border-muted bg-muted/20 hover:border-primary/50 transition-all group">
              <Terminal className="w-10 h-10 text-primary mb-6" />
              <h2 className="text-2xl font-semibold mb-4">CLI Tool</h2>
              <p className="text-muted-foreground mb-6">
                Manage your entire ServAfri fleet directly from your terminal using `servafri-cli`.
              </p>
              <Button variant="link" className="p-0 text-primary group-hover:gap-2 transition-all">
                View Documentation <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-8 rounded-2xl border border-muted bg-muted/20 hover:border-primary/50 transition-all group">
              <Code className="w-10 h-10 text-primary mb-6" />
              <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
              <p className="text-muted-foreground mb-6">
                Full REST API access for automated infrastructure management and integration.
              </p>
              <Button variant="link" className="p-0 text-primary group-hover:gap-2 transition-all">
                Explore API <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
