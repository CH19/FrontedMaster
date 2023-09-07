export const metadata = {
  title: 'Next.js',
  description: 'Hpli',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
