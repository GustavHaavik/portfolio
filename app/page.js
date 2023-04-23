import About from '@/components/About';
import Main from '@/components/Main';
import Projects from '@/components/Projects';
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className='bg-gradient-to-b from-[#0a0a0a] to-[#2b2b31]'>
      <Navbar />
      <Main />
      <About />
      <Projects />

      <Footer />
      <Analytics />
    </div>
  )
}