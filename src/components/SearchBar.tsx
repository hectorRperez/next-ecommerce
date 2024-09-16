'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function SearchBar() {

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`)
    }
  }


  return (
    <form
      className='flex relative flex-1'
      onSubmit={handleSearch}
    >
      <input
        className="flex-1 appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight bg-slate-100"
        type="text"
        name='name'
        placeholder="Search..."
      />
      <button className='cursor-pointer'>
        <Image
          alt='search'
          src={'/search.png'}
          width={15}
          height={15}
          className='absolute right-2 top-3'
        />
      </button>
    </form>
  )
}
