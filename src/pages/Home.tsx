import { Header } from '../components/Header'
import { Posts } from '../components/Posts'
import { Sidebar } from '../components/Sidebar'

export interface Post {
  id: number
  author: {
    name: string
    role: string
    avatarURL: string
  }
  profileImg: string
  content: {
    type: string
    content: string
  }[]
  publishedAt: Date
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      name: 'LukeSKW',
      role: 'Software Engineer',
      avatarURL: 'https://github.com/lukeskw.png',
    },
    profileImg: 'https://avatars.githubusercontent.com/u/49079033?v=4',
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },

      {
        type: 'paragraph',
        content:
          'I just uploaded another project to my portfolio. AND a project I did at NLW Return, a Rocketseat event. The name of the project is DoctorCare 🚀',
      },

      {
        type: 'link',
        content: '👉 github.com/lukeskw/doctorcare',
      },
      {
        type: 'link',
        content: ' #novoprojeto #nlw #rocketseat',
      },
    ],
    publishedAt: new Date('2024-02-26 20:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'Diego',
      role: 'Software Engineer',
      avatarURL: 'https://github.com/diego3g.png',
    },
    profileImg: 'https://avatars.githubusercontent.com/u/49079033?v=4',
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },

      {
        type: 'paragraph',
        content:
          'I just uploaded another project to my portfolio. AND a project I did at NLW Return, a Rocketseat event. The name of the project is DoctorCare 🚀',
      },

      {
        type: 'link',
        content: '👉 github.com/lukeskw/doctorcare',
      },
      {
        type: 'link',
        content: '#novoprojeto #nlw #rocketseat',
      },
    ],
    publishedAt: new Date('2024-02-27 10:00:00'),
  },
]

export function HomePage() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="mx-auto my-8 grid w-full max-w-5xl grid-cols-1 items-start gap-8 px-8 lg:grid-cols-posts">
        <Sidebar
          coverImg="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="LukeSkw"
          role="Software Engineer"
          profileImg="https://avatars.githubusercontent.com/u/49079033?v=4"
        />
        <main className="space-y-6">
          {posts.map((post) => {
            return <Posts key={crypto.randomUUID()} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}
