import { Header } from '../components/Header'
import { Posts } from '../components/Posts'
import { Sidebar } from '../components/Sidebar'

const posts = [
  {
    id: '1',
    author: 'LukeSkw',
    profileImg: 'https://avatars.githubusercontent.com/u/49079033?v=4',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '2',
    author: 'Diego',
    profileImg: 'https://avatars.githubusercontent.com/u/49079033?v=4',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

export function HomePage() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="grid-cols-1 lg:grid-cols-posts mx-auto my-8 grid w-full max-w-5xl items-start gap-8 px-8">
        <Sidebar
          coverImg="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="LukeSkw"
          role="Software Engineer"
          profileImg="https://avatars.githubusercontent.com/u/49079033?v=4"
        />
        <main className="space-y-6">
          <Posts posts={posts} />
        </main>
      </div>
    </div>
  )
}
