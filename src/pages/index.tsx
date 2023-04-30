import { Leftbar } from '@/components/organisms/Leftbar'
import { Topbar } from '@/components/organisms/Topbar'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`bg-carbone-secondary h-full w-full p-8 flex-row `}
    >
      <div>
      <Head>
        <title>Adagio</title>
      </Head>
      <Topbar />
      </div>
      <div className="flex flex-row justify-between h-full w-full mt-8">
        <Leftbar />
      <div>
        posts
      </div>
      <aside className="flex flex-col items-center justify-center h-full w-96 bg-carbone rounded-lg">
        sidebar direita
        </aside>
        </div>
    </main>
  )
}
