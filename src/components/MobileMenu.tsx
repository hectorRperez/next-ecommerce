'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function MobileMenu() {
  const [showMenuMobile, setShowMenuMobile] = useState(false)
  return (
    <div className='flex items-center'>
      <Image
        alt='icon'
        src={'/menu.png'}
        width={30}
        height={30}
        onClick={() => setShowMenuMobile((prev) => !prev)}
      />
      {
        showMenuMobile && (
          <div className='w-full bg-black absolute top-20 left-0 h-[calc(100vh-80px)] flex justify-center flex-col items-center gap-5 text-xl'>
            <Link href={"/"} className='text-slate-100'>Homepage</Link>
            <Link href={"/"} className='text-slate-100'>Shop</Link>
            <Link href={"/"} className='text-slate-100'>Deals</Link>
          </div>
        )
      }
    </div>
  )
}
