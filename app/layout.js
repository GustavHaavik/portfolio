import '../styles/globals.css'

export const metadata = {
  title: 'Gustav Haavik - Portfolio',
  description: 'Gustav Haavik portfolio website. Built with Next.js and TailwindCSS. Hosted on Vercel.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
