import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className="mt-6 flex gap-4">
      <Avatar
        hasBorder={false}
        profileImg="https://github.com/lukeskw.png"
      />
      <div className="flex-1">
        <div className="rounded-lg bg-gray-700 p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-sm leading-5">LukeSkw</strong>
              <time
                className="text-xs text-gray-400"
                title="Feb 20, at 02:25h"
                dateTime="2024-02-20 02:25:30"
              >
                About 1h ago
              </time>
            </div>
            <button
              title="Delete comment"
              className="cursor-pointer leading-none transition-all duration-100 hover:text-red-500"
            >
              <Trash className="h-4 w-4" />
            </button>
          </header>
          <p className="mt-4 text-gray-300">Amazing Luke, Congrats!!</p>
        </div>
        <footer className="mt-4">
          <button className="flex cursor-pointer items-center text-gray-400 hover:text-emerald-500">
            <ThumbsUp className="mr-2 h-4 w-4" />
            Cheers
            <span className="before:px-1 before:content-['\2022']">20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
