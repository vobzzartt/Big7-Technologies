import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers — Join the Systems Research Lab | Big7 Technologies',
  description: 'Join the Big7 team. We are looking for exceptional engineers in Go, Rust, Blockchain, and Frontend systems to build the core layers of sovereign infrastructure.',
  openGraph: {
    title: 'Careers — Big7 Technologies',
    description: 'Engineering the future from Africa. Explore open roles in distributed systems and foundational engineering.',
    images: ['/careers-og.png'],
  }
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
