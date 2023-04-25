import { Topbar } from '@/components/organisms/Topbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`bg-carbone-secondary h-screen w-screen p-8`}
    >
      <Topbar />
      <h1 className="text-4xl font-bold text-center"> ADAGIO </h1>
    </main>
  )
}
