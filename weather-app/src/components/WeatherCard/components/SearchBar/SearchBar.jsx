import React from 'react'

const SearchBar = () => {
  return (
    <form className='flex bg-white p-1 w-fit rounded-[8px] mb-8 drop-shadow-md'>
      <input type="text" placeholder='search for a city' className='bg-transparent px-4' />
      <button className='px-4 py-1 bg-[#5D4DDE] rounded-[8px] text-white'>Search</button>
    </form>
  )
}

export default SearchBar