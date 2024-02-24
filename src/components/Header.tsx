import feedLogo from '../assets/feed-logo.svg'

export function Header() {
  return (
    <header>
      <strong className="flex items-center justify-center gap-4 bg-gray-900 px-2 py-6 text-white">
        <img src={feedLogo} alt="react-feed-logo" className="h-8 w-8" />
        React Feed
      </strong>
    </header>
  )
}
