import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — The Origin of Sovereign Infrastructure | Big7 Technologies',
  description: 'Founded 
  in 2024, Big7 Technologies is building the core foundational layers of African infrastructure to break the cycle of foreign tech dependency.',
  openGraph: {
    title: 'About Big7 Technologies — Our Story & Mission',
    description: 'Engineering the foundational protocols that power the next decade of digital growth in Africa.',
    images: ['/about-og.png'],
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
