import React from 'react'

const SearchButton = ({setOpen}) => {
   return (
      <div onClick={() => setOpen(true)} className='w-[250px] h-[40px] text-gray-500 bg-gray-200 rounded-md flex items-center py-2 px-3 cursor-pointer justify-end border border-transparent hover:border-gray-300'>search</div>
   )
}

export default SearchButton