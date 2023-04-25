import Nav from '@/components/atoms/BrowserMenu'
import { Topbar } from '@/components/organisms/Topbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`bg-carbone-secondary h-screen w-full p-8 flex-row`}
    >
      <div>

      <Topbar>
        <Nav items={
          [
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' },
          ]
        }/>
      </Topbar>
      </div>
      <div className="flex flex-row justify-between h-full w-full mt-8">
      <aside className="flex flex-col items-center justify-center h-full w-96 bg-carbone rounded-lg">
        Sidebar Esquerda
        </aside>
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
