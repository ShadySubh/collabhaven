import type { Metadata } from 'next'
import { Outfit, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { BackgroundRipple } from '@/components/background-ripple'

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
    title: 'CollabHaven | Talent + Brand Partnership Agency',
    description: 'CollabHaven is a new-age Talent + Brand Partnership Agency in the creator economy. Bold, experimental, and premium.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground antialiased selection:bg-primary selection:text-white overflow-x-hidden`}>
                <BackgroundRipple />
                {children}
            </body>
        </html>
    )
}
