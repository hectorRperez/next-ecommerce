import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

export default function Navbar() {
  return (
    <div className='relative h-20  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>

      {/* SCREEN MOBILE */}
      <div className='flex md:hidden justify-between items-center h-full'>
        <Link href={'/'}>LAMA</Link>
        <MobileMenu />
      </div>

      {/* SCREEN DESKTOP */}
      <div className='hidden md:flex items-center justify-between p-4'>
        {/* LEFT */}
        <div className='w-1/3 xl:w-1/2 flex justify-between items-center p-4 '>
          <Link href={"/"} className='flex items-center '>
            <Image alt='brand' src={"/logo.png"} width={24} height={24} />
            <h1>LAMA</h1>
          </Link>
          <div className='hidden xl:flex gap-4 '>
            <Link href={"/"}>Homepage</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className='w-2/3 xl:w-1/2 flex items-center gap-8'>
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  )
}
