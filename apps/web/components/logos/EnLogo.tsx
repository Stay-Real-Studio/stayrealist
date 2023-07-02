import Link from 'next/link'

export const EnLogo = ({ lng }: { lng: any }) => {
  const getLogoClassName = () =>
    'md:text-base p-4 mt-1 text-lg cursor-pointer z-10 logo bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-500'
  return (
    <Link href={`/${lng}/`} className={getLogoClassName()}>
      Stay Real List
    </Link>
  )
}
