'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Terminal, Cpu, Database, Network, Shield, Zap, Sparkles } from 'lucide-react'

const ServAfriTerminalOutput = () => {
  const [lines, setLines] = useState<string[]>([])
  
  const sequence = [
    { text: "> [NODE] Initializing high-density compute node: servafri-ng-01", delay: 400 },
    { text: "> [STORAGE] Allocating NVMe block storage: 1.2TB [SECURE]", delay: 600 },
    { text: "> [NETWORK] BGP route established: lagos-ixp-01", delay: 800 },
    { text: "> [LATENCY] Peer-to-peer check: 1.2ms [EXCELLENT]", delay: 500 },
    { text: "> [VM] Provisioning Ubuntu 22.04 LTS instance...", delay: 700 },
    { text: "> [AUTH] Securing root access with sovereign cryptographic keys", delay: 1000 },
    { text: "> [SUCCESS] Deployment complete. Public IP: 102.64.x.x", delay: 1200 },
    { text: "> [STATUS] System healthy. Current load: 14%", delay: 500 }
  ]

  useEffect(() => {
    let isActive = true
    let seqIndex = 0

    const runSequence = async () => {
      while (isActive) {
        if (seqIndex >= sequence.length) {
            await new Promise(r => setTimeout(r, 4000))
            if (isActive) {
                setLines([])
                seqIndex = 0
            }
            continue;
        }

        if (isActive) {
            setLines(prev => [...prev, sequence[seqIndex].text].slice(-10))
            await new Promise(r => setTimeout(r, sequence[seqIndex].delay))
            seqIndex++
        }
      }
    }
    
    runSequence()
    return () => { isActive = false }
  }, [])

  return (
    <div className="h-full w-full font-mono text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 overflow-hidden flex flex-col justify-end p-6 bg-background/40 will-change-[contents,transform]">
       <div className="flex flex-col gap-2.5">
          {lines.map((line, i) => (
             <p key={i} className={line.includes('SUCCESS') || line.includes('EXCELLENT') || line.includes('healthy') ? 'text-green-600 dark:text-green-400 font-bold' : 'text-muted-foreground'}>{line}</p>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-primary animate-pulse">{'>'}</span>
            <div className="w-2 bg-primary h-4 animate-pulse"></div>
          </div>
       </div>
    </div>
  )
}

export function ServAfriMetrics() {
  return (
    <section className="w-full py-20 lg:py-32 bg-muted/20 border-y border-muted/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Global Infrastructure Metrics.</h2>
              <p className="text-lg text-muted-foreground">Real-time telemetry from the ServAfri sovereign cloud engine. Monitor deployment cycles, latency, and resource allocation across the continent.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <Card className="lg:col-span-2 border-muted shadow-sm flex flex-col bg-background/95 md:bg-background/50 md:backdrop-blur-sm min-h-[450px] will-change-transform">
             <div className="flex items-center gap-2 px-5 py-4 border-b border-muted bg-muted/30 rounded-t-xl">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
                 </div>
                 <span className="ml-auto text-[10px] font-mono text-muted-foreground flex items-center gap-2 uppercase tracking-[0.2em] font-bold"><Terminal className="w-3 h-3"/> servafri://node_ng_01</span>
             </div>
             <CardContent className="p-0 flex-1 relative rounded-b-xl overflow-hidden">
                <ServAfriTerminalOutput />
             </CardContent>
          </Card>

          <Card className="lg:col-span-1 border-muted shadow-sm bg-background/95 md:bg-background/50 md:backdrop-blur-sm flex flex-col overflow-hidden relative will-change-transform">
             <div className="px-6 py-5 border-b border-muted bg-muted/20 flex justify-between items-center">
                 <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">CLOUD_STATUS</span>
                 <span className="text-[10px] font-bold text-primary flex items-center gap-2 tracking-[0.2em] uppercase"><Zap className="w-3 h-3" /> Live</span>
             </div>
             
             <CardContent className="p-6 space-y-6 flex-1 flex flex-col justify-center">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Cpu className="size-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Compute Load</p>
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">14.2% [STABLE]</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Network className="size-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Network Latency</p>
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">1.2ms [GLOBAL]</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Shield className="size-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Data Trust</p>
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Sovereign / Encrypted</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-muted/50">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">Network Uptime</span>
                        <span className="text-[10px] font-bold text-primary">99.99%</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '99.99%' }}></div>
                    </div>
                </div>
             </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
