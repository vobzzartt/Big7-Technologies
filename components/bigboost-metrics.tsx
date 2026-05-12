'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, BarChart3, Users, Terminal, TrendingUp } from 'lucide-react'

// BigBoost Terminal Sequence - Real Algorithm Logic
const BigBoostTerminalOutput = () => {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState("")
  
  const sequence = [
    { text: "> [LOGIC] Initiating recursive audience analysis...", delay: 400 },
    { text: "> [SCAN] Vectorizing sentiment data [West Africa | Europe]...", delay: 600 },
    { text: "> [ALG] Calculating engagement propensity matrix...", delay: 500 },
    { text: "> [DATA] sentiment_core: 0.9412 (Normalized)", delay: 800 },
    { text: "> [VERIFY] SMS identity handshake: SECURE", delay: 700 },
    { text: "--------- NEURAL GROWTH LOOP OPTIMIZED ---------", delay: 1000 },
    { text: "> [AUTO] Adjusting CPC/CPM weights based on trend velocity...", delay: 1200 },
    { text: "> [SUCCESS] Growth commands dispatched to API nodes.", delay: 500 }
  ]

  useEffect(() => {
    let isActive = true
    let seqIndex = 0

    const runSequence = async () => {
      while (isActive) {
        if (seqIndex >= sequence.length) {
            await new Promise(r => setTimeout(r, 3000))
            if (isActive) {
                setLines([])
                seqIndex = 0
            }
            continue;
        }

        const item = sequence[seqIndex]
        setCurrentLine("")
        
        let typed = ""
        for (let i = 0; i < item.text.length; i++) {
            if (!isActive) break;
            typed += item.text[i]
            setCurrentLine(typed)
            await new Promise(r => setTimeout(r, 20))
        }

        if (isActive) {
            setLines(prev => [...prev, item.text])
            setCurrentLine("")
            await new Promise(r => setTimeout(r, item.delay))
            seqIndex++
        }
      }
    }
    
    runSequence()
    return () => { isActive = false }
  }, [])

  return (
    <div className="h-full w-full font-mono text-[13px] leading-tight sm:text-sm text-primary/90 overflow-hidden flex flex-col justify-end p-4">
       <div className="flex flex-col gap-1.5 opacity-90">
          <p className="text-muted-foreground">{'>'} Algorithm v2.4.1 [ACTIVE]</p>
          {lines.map((line, i) => (
             <p key={i} className={line.includes('SUCCESS') || line.includes('OPTIMIZED') ? 'text-green-500' : 'text-primary'}>{line}</p>
          ))}
          <p className="text-primary">{currentLine}<span className="inline-block w-2 bg-primary h-3.5 ml-1 animate-pulse align-middle"></span></p>
       </div>
    </div>
  )
}

const campaignRegions = [
  { name: 'Lagos, NG', baseValue: 92, value: 92, unit: '%', label: 'Sentiment' },
  { name: 'Accra, GH', baseValue: 85, value: 85, unit: '%', label: 'Reach' },
  { name: 'Nairobi, KE', baseValue: 78, value: 78, unit: '%', label: 'Growth' },
  { name: 'Abuja, NG', baseValue: 94, value: 94, unit: '%', label: 'Retention' },
  { name: 'Europe', baseValue: 88, value: 88, unit: '%', label: 'Conversion' },
]

export function BigBoostMetricsSection() {
  const [engagement, setEngagement] = useState(42.5)
  const [reach, setReach] = useState(125) // 125k
  const [verifications, setVerifications] = useState(11200) // Reduced max 12000

  useEffect(() => {
    const interval = setInterval(() => {
      setEngagement(prev => {
        const next = Math.max(40, Math.min(48, prev + (Math.random() - 0.5) * 0.5))
        return Number(next.toFixed(1))
      })
      setReach(prev => {
        const next = Math.max(120, Math.min(128, prev + (Math.random() - 0.5) * 1))
        return Number(next.toFixed(0))
      })
      setVerifications(prev => {
          const next = prev + (Math.random() > 0.5 ? 1 : -1)
          return Math.max(11000, Math.min(12000, next))
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-20 lg:py-32 bg-muted/20 border-y border-muted overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900">Algorithmic Growth.</h2>
              <p className="text-lg text-muted-foreground">Leveraging AI to map audience sentiment, automate engagement, and scale your brand identity across West Africa and Europe.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,_auto)]">
          
          {/* Terminal Block */}
          <Card className="lg:col-span-1 border-muted shadow-sm flex flex-col bg-background/50 backdrop-blur">
             <div className="flex items-center gap-2 px-4 py-3 border-b border-muted bg-muted/40 rounded-t-xl">
                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-400"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
                 <span className="ml-auto text-[10px] font-mono text-muted-foreground flex items-center gap-2 uppercase tracking-tighter"><Terminal className="w-3 h-3"/> bigboost://algorithm_v2</span>
             </div>
             <CardContent className="p-0 flex-1 relative bg-background/80 rounded-b-xl">
                 <BigBoostTerminalOutput />
             </CardContent>
          </Card>

          {/* Metrics 2x2 Block */}
          <div className="lg:col-span-1 grid grid-cols-2 grid-rows-2 gap-4">
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">{engagement}%</span>
                <span className="text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-widest">Growth Velocity</span>
             </Card>
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50 relative overflow-hidden">
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-zinc-900 animate-pulse"></div>
                   <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-wider">Live</span>
                </div>
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">{reach}K</span>
                <span className="text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-widest">Target Reach</span>
             </Card>
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">94.2%</span>
                <span className="text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-widest">Sentiment Score</span>
             </Card>
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">{verifications.toLocaleString()}</span>
                <span className="text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-widest">Active IDs</span>
             </Card>
          </div>

          {/* Map Status Block */}
          <Card className="lg:col-span-1 row-span-2 border-muted shadow-sm bg-background/50 flex flex-col overflow-hidden relative">
             <div className="px-6 py-5 border-b border-muted bg-muted/20 flex justify-between items-center">
                 <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">AUDIENCE_CLUSTER.MAP</span>
                 <span className="text-[10px] font-bold text-zinc-900 flex items-center gap-2"><Sparkles className="w-3 h-3" /> AI Optimized</span>
             </div>
             
             <div className="h-64 w-full relative bg-zinc-50 border-b border-muted overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
                <TrendingUp className="size-32 text-zinc-200" />
                <span className="text-[10px] z-10 font-mono text-muted-foreground absolute bottom-3 right-3 uppercase">growth_projection.v4</span>
             </div>
             
             <CardContent className="p-0 flex-1 flex flex-col">
                <div className="p-6">
                    <div className="grid grid-cols-[1fr_auto_auto] gap-4 mb-4 text-[10px] font-mono text-muted-foreground border-b border-muted/50 pb-2 uppercase tracking-wide">
                        <span>Target Region</span>
                        <span>Engagement</span>
                        <span>Status</span>
                    </div>
                    <div className="space-y-3">
                        {campaignRegions.map((region) => (
                            <div key={region.name} className="grid grid-cols-[1fr_auto_auto] gap-4 text-sm items-center font-medium text-zinc-900">
                                <span>{region.name}</span>
                                <span className="text-primary font-bold">{region.value}{region.unit}</span>
                                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
                                    Optimized
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-auto border-t border-muted bg-muted/10 p-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Algorithm Performance</span>
                        <span className="text-[10px] font-bold text-zinc-900">98% Efficient</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
                        <div className="h-full bg-zinc-900 rounded-full transition-all duration-1000" style={{ width: '98%' }}></div>
                    </div>
                </div>
             </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
