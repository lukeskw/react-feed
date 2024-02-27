import { format, formatDistanceToNow } from 'date-fns'
import { Post } from '../pages/Home'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { ChangeEvent, FormEvent, useState } from 'react'
interface PostsProps {
  post: Post
}

export function Posts({ post }: PostsProps) {
  const publishedDate = format(post.publishedAt, "LLL d, 'at' HH:mm'h'")
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    addSuffix: true,
  })

  const [comment, setComment] = useState<Array<string>>(['Really cool post!'])
  const [newCommentText, setNewCommentText] = useState('')

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value)
  }

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setComment([newCommentText, ...comment])

    setNewCommentText('')
  }

  function deleteComment(deletedComment: string) {
    const commentsList = comment.filter((comment) => {
      return comment !== deletedComment
    })

    setComment(commentsList)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className="rounded-lg bg-gray-800 p-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar profileImg={post.author.avatarURL} />
          <div className="flex flex-col ">
            <strong className="mt-4 leading-6 text-gray-200">
              {post.author.name}
            </strong>
            <span className="text-sm leading-6 text-gray-400">
              {post.author.role}
            </span>
          </div>
        </div>
        <time
          className="text-sm text-gray-400"
          title={publishedDate}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className="mt-6 leading-6 text-gray-300">
        {post.content.map((item) => {
          if (item.type === 'paragraph') {
            return (
              <p key={crypto.randomUUID()} className="mt-4">
                {item.content}
              </p>
            )
          }
          if (item.type === 'link') {
            return (
              <p key={crypto.randomUUID()} className="mt-4">
                <a
                  href="#"
                  className="font-bold text-emerald-500 transition-all duration-100 hover:text-emerald-600 "
                >
                  {item.content}
                </a>
              </p>
            )
          }
          return null
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className="mt-6 w-full border-t border-gray-600 pt-6"
      >
        <strong className="leading-6 text-gray-100">Leave your feedback</strong>

        <textarea
          className="mt-4 h-24 w-full resize-none rounded-lg border-none bg-gray-900 p-4 leading-5 text-gray-200"
          placeholder="Leave a comment"
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
        />

        {/* <footer className="invisible max-h-0 focus-within:visible focus-within:max-h-[none]"> */}
        <footer>
          <button
            type="submit"
            className="mt-4 cursor-pointer rounded-lg border-none bg-emerald-700 px-6 py-4 font-bold text-white transition-all duration-100 hover:bg-emerald-600 disabled:bg-emerald-900 disabled:hover:cursor-not-allowed disabled:hover:bg-emerald-900"
            disabled={isNewCommentEmpty}
          >
            Post
          </button>
        </footer>
      </form>

      <div className="mt-8">
        {comment.map((comment) => {
          return (
            <Comment
              key={crypto.randomUUID()}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
