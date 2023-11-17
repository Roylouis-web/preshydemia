'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaSearch} from 'react-icons/fa';

const Search = () => {
  const [searched, setSearched] = useState("");
  const router = useRouter();

  return (
    <div className="mx-auto flex absolute w-full top-36">
      <div className="w-3/4 sm:w-2/3 mx-auto mt-6 flex">
        <input type="search" name="search" id="search" placeholder="search" value={searched} className="w-full text-xl px-4 outline-none placeholder-slate-500 sm:text-2xl lg:text-3xl dark:bg-white bg-gray-900 rounded-xl text-gray-400 dark:text-black" onChange={(e) => setSearched(e.target.value)}/>
        <div className="bg-white dark:bg-black flex items-center text-[green] p-4 lg:text-3xl" onClick={() => router.push(`/dishes/searched?search=${searched}`)}>
        <FaSearch />
        </div>
      </div>
    </div>
  )
}

export default Search