interface AvatarProps {
  profileImg: string
  hasBorder?: boolean
}

export function Avatar({ profileImg, hasBorder = true }: AvatarProps) {
  return (
    <>
      <img
        src={profileImg}
        className={`mx-auto box-content rounded-lg ${!hasBorder ? 'h-12 w-12' : 'h-20 w-20 border-4 border-gray-900 outline outline-emerald-600'}`}
        alt="profileImg"
      />
    </>
  )
}
