import Link from 'next/link'

export const CnLogo = ({ lng }: { lng: any }) => {
  return (
    <Link
      href={`/${lng}/`}
      className="cursor-pointer z-10 absolute top-8 left-8 p-8 logo bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-500"
    >
      至真列表
    </Link>
  )
}
