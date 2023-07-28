import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'René Mundt',
  description:
    'Website of René Mundt, Frontend developer and former fullstack developer. Fulltime husband, father bicylist, motionist and much more',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between  bg-zinc-400 p-1.5">
          <div className="flex">René Mundt</div>
          <div className="flex items-end">
            <nav className="flex gap-2">
              <Link className="hover:bg-sky-700" href="/">
                Home
              </Link>
              <Link className="hover:bg-sky-700" href="/blog">
                Blog
              </Link>
              <Link className="hover:bg-sky-700" href="/about">
                About
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
