import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

interface SidebarProps {
  coverImg: string
  profileImg: string
  name: string
  role: string
}

export function Sidebar(props: SidebarProps) {
  return (
    <aside className="overflow-hidden rounded-lg bg-gray-800">
      <img
        src={props.coverImg}
        className="h-20 w-full object-cover"
        alt="coverImg"
      />
      <div className="-my-8 flex flex-col items-center">
        <Avatar profileImg="https://github.com/lukeskw.png" />

        <strong className="mt-4 leading-6 text-gray-200">{props.name}</strong>
        <span className="text-sm leading-6 text-gray-400">{props.role}</span>
      </div>
      <footer className="mt-12 border-t border-t-gray-600 px-8 py-6">
        <a
          href="#"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-500 bg-transparent px-6 py-2 font-bold text-emerald-500 transition-all duration-100 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white"
        >
          <PencilLine className="h-4 w-4" />
          Edit Profile
        </a>
      </footer>
    </aside>
  )
}
