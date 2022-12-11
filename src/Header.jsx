import React from 'react'
import SearchButton from './SearchButton'

const Header = ({open, setOpen}) => {
  return (
    <div className='w-full h-[70px] bg-gray-50 flex items-center px-3 py-2 justify-end'>
      <SearchButton setOpen={setOpen} />
    </div>
  )
}

export default Header