import './globals.css'
import type { Metadata } from 'next'
import NavBar from './componenents/NavBar'
import Footer from './componenents/Footer'

export const metadata: Metadata = {
  title: 'Preshydemia',
  description: 'An online learning platform',
}


const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className='dark:bg-black min-h-screen flex-col flex justify-between'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout