import { Avatar } from './Avatar'
import { Comment } from './Comment'

interface Post {
  id: string
  author: string
  content: string
  profileImg: string
}
interface PostsProps {
  posts: Post[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <>
      {posts.map((post) => {
        return (
          <article key={post.id} className="rounded-lg bg-gray-800 p-10">
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar
                  profileImg={post.profileImg}
                />
                <div className="flex flex-col ">
                  <strong className="mt-4 leading-6 text-gray-200">
                    {post.author}
                  </strong>
                  <span className="text-sm leading-6 text-gray-400">
                    Software Engineer
                  </span>
                </div>
              </div>
              <time
                className="text-sm text-gray-400"
                title="Feb 20, at 02:25h"
                dateTime="2024-02-20 02:25:30"
              >
                Posted 1h ago
              </time>
            </header>
            <div className="mt-6 leading-6 text-gray-300">
              <p className="mt-4">Hey guys 👋</p>
              <p className="mt-4">
                I just uploaded another project to my portfolio. AND a project I
                did at NLW Return, a Rocketseat event. The name of the project
                is DoctorCare 🚀
              </p>
              <p className="mt-4">
                <a
                  href="#"
                  className="font-bold text-emerald-500 transition-all duration-100 hover:text-emerald-600"
                >
                  👉 github.com/lukeskw/doctorcare
                </a>
              </p>
              <p className="mt-4">
                <a
                  href="#"
                  className="font-bold text-emerald-500 transition-all duration-100 hover:text-emerald-600"
                >
                  #novoprojeto #nlw #rocketseat
                </a>
              </p>
            </div>

            <form className="mt-6 w-full border-t border-gray-600 pt-6">
              <strong className="leading-6 text-gray-100">
                Leave your feedback
              </strong>

              <textarea
                className="mt-4 h-24 w-full resize-none rounded-lg border-none bg-gray-900 p-4 leading-5 text-gray-200"
                placeholder="Leave a comment"
              />

              {/* <footer className="invisible max-h-0 focus-within:visible focus-within:max-h-[none]"> */}
              <footer>
                <button
                  type="submit"
                  className="mt-4 cursor-pointer rounded-lg border-none bg-emerald-700 px-6 py-4 font-bold text-white transition-all duration-100 hover:bg-emerald-600"
                >
                  Post
                </button>
              </footer>
            </form>

            <div className="mt-8">
              <Comment />
              <Comment />
              <Comment />
            </div>
          </article>
        )
      })}
    </>
  )
}
