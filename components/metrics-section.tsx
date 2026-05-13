'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Terminal, Cpu, Database, Network, Shield, Zap, Sparkles } from 'lucide-react'

// Blockchain & High-Compute Terminal - Pure Technology Logic
const LabTerminalOutput = () => {
  const [lines, setLines] = useState<string[]>([])
  
  const sequence = [
    { text: "> [NODE] Initializing validator cluster: lagos-01-mainnet", delay: 400 },
    { text: "> [CONSENSUS] Verifying Merkle root: 0x7f4e...99f1", delay: 600 },
    { text: "> [COMPUTE] Synchronizing H100 GPU cluster [8/8 nodes online]", delay: 800 },
    { text: "> [BLOCK] Validating block 10,482,021 | Hash: verified", delay: 500 },
    { text: "> [STORAGE] Measuring NVMe throughput: 14.2 GB/s", delay: 700 },
    { text: "> [SECURITY] Rotating sovereign cryptographic keys...", delay: 1000 },
    { text: "> [NETWORK] BGP route propagation complete. Peer count: 42", delay: 1200 },
    { text: "> [SUCCESS] System integrity check passed. Logic: STABLE", delay: 500 }
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
             <p key={i} className={line.includes('SUCCESS') || line.includes('verified') || line.includes('online') ? 'text-green-600 dark:text-green-400 font-bold' : 'text-muted-foreground'}>{line}</p>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-primary animate-pulse">{'>'}</span>
            <div className="w-2 bg-primary h-4 animate-pulse"></div>
          </div>
       </div>
    </div>
  )
}

export function MetricsSection() {
  return (
    <section className="w-full py-20 lg:py-32 bg-muted/20 border-y border-muted/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Sovereign Systems Lab.</h2>
              <p className="text-lg text-muted-foreground">Engineering the foundational layers of decentralized consensus, high-density compute, and sovereign networking.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Lab Terminal Block */}
          <Card className="lg:col-span-2 border-muted shadow-sm flex flex-col bg-background/95 md:bg-background/50 md:backdrop-blur-sm min-h-[450px] will-change-transform">
             <div className="flex items-center gap-2 px-5 py-4 border-b border-muted bg-muted/30 rounded-t-xl">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
                 </div>
                 <span className="ml-auto text-[10px] font-mono text-muted-foreground flex items-center gap-2 uppercase tracking-[0.2em] font-bold"><Terminal className="w-3 h-3"/> big7://research_v4</span>
             </div>
             <CardContent className="p-0 flex-1 relative rounded-b-xl overflow-hidden">
                <LabTerminalOutput />
             </CardContent>
          </Card>

          {/* Research Status Block */}
          <Card className="lg:col-span-1 border-muted shadow-sm bg-background/95 md:bg-background/50 md:backdrop-blur-sm flex flex-col overflow-hidden relative will-change-transform">
             <div className="px-6 py-5 border-b border-muted bg-muted/20 flex justify-between items-center">
                 <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">LAB_STATUS</span>
                 <span className="text-[10px] font-bold text-primary flex items-center gap-2 tracking-[0.2em] uppercase"><Sparkles className="w-3 h-3" /> Real-Time</span>
             </div>
             
             <CardContent className="p-6 space-y-6 flex-1 flex flex-col justify-center">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Database className="size-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Consensus</p>
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Verified</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Cpu className="size-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Compute</p>
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Synchronized</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Network className="size-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Network</p>
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Optimized</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-muted/50">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">Research Velocity</span>
                        <span className="text-[10px] font-bold text-primary">94.8%</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '94.8%' }}></div>
                    </div>
                </div>
             </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
