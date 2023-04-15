import About from '@/components/About';
import Main from '@/components/Main';
import Projects from '@/components/Projects';
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className='bg-gradient-to-b from-[#0a0a0a] to-[#2b2b31]'>
      <Head>
        <title>Gustav&apos;s Portfolio</title>
        <meta name='description' content='Min porfolio ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <Main />
      <About />
      <Projects />
      <div className='bg-[#0a0a0a] w-full h-auto flex justify-center items-center py-4 mt-10'>
        <p className='text-sm text-white font-bold'>©{year} Portfolio, af Gustav Haavik.</p>
      </div>
    </div>
  )
}