import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Code, Terminal, Cpu, Globe, ArrowRight, Shield, Layers, Cloud } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Developers | Big7 Technologies',
  description: 'Open source systems, native token protocols, and sovereign cloud infrastructure.',
}

export default function DevelopersPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32">
        <section className="mx-auto max-w-7xl px-6">
          <div className="space-y-6 max-w-3xl mb-16 md:mb-24">
            <h1 className="text-4xl font-semibold lg:text-6xl tracking-tight">Open Source & Research</h1>
            <p className="text-lg text-muted-foreground">
              Big7 Technologies is committed to open-source systems engineering. We build the foundational layers of modern compute and value exchange in the open.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <div className="p-8 rounded-2xl border border-muted bg-muted/20 hover:border-primary/50 transition-all group">
              <Shield className="w-10 h-10 text-primary mb-6" />
              <h2 className="text-2xl font-semibold mb-4">APK-Proof Crypto</h2>
              <p className="text-muted-foreground mb-6">
                Zero-trust mobile integrity and cryptographic verification tools for secure distributed applications.
              </p>
              <Button asChild variant="link" className="p-0 text-primary group-hover:gap-2 transition-all">
                <Link href="https://github.com/big7technologies" target="_blank">
                  View Source <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="p-8 rounded-2xl border border-muted bg-muted/20 hover:border-primary/50 transition-all group">
              <Layers className="w-10 h-10 text-primary mb-6" />
              <h2 className="text-2xl font-semibold mb-4">Multi-chain Native Token</h2>
              <p className="text-muted-foreground mb-6">
                Native protocol layers for cross-chain liquidity and sovereign value exchange between distributed ecosystems.
              </p>
              <Button asChild variant="link" className="p-0 text-primary group-hover:gap-2 transition-all">
                <Link href="https://github.com/big7technologies" target="_blank">
                  View Source <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="p-8 rounded-2xl border border-muted bg-muted/20 hover:border-primary/50 transition-all group">
              <Cloud className="w-10 h-10 text-primary mb-6" />
              <h2 className="text-2xl font-semibold mb-4">Sovereign Cloud (K8s)</h2>
              <p className="text-muted-foreground mb-6">
                Hardened Kubernetes distributions and compute orchestration layers for regional sovereign infrastructure.
              </p>
              <Button asChild variant="link" className="p-0 text-primary group-hover:gap-2 transition-all">
                <Link href="https://github.com/big7technologies" target="_blank">
                  View Source <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
