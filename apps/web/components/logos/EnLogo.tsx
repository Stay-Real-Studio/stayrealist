import Link from 'next/link'

export const EnLogo = ({ lng }: { lng: any }) => {
  return (
    <Link
      href={`/${lng}/`}
      className="md:text-base md:left-6 xl:left-8 xl:text-lg 2xl:text-2xl sm:top-4 md:p-4 text-sm xl:p-6 xl:top-6  cursor-pointer z-10 absolute top-4 left-4 p-4 logo bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-500"
    >
      Stayrealist
    </Link>
  )
}
