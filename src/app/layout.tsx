import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vite + React + TS',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
