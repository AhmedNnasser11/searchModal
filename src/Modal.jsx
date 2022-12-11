import React, { useState } from 'react'

const Modal = ({setOpen}) => {
   const [data, setData] = useState([])
   console.log("data", data)
  return (
       <div onClick={() => setOpen(false)} className='absolute top-0 bottom-0 left-0 right-0 w-screen	h-screen	 bg-gray-100 z-20'>
      <div onClick={(e) => e.stopPropagation()} className='flex flex-col w-[32%] mx-auto'>
         <div className='mx-auto mt-10 bg-white py-3 px-5'>
            <input type="search" className='w-[400px] h-[40px] px-5 border border-slate-500 rounded' placeholder='search' />
         </div> 
         {
            data.length !== 0 && <div className='bg-white py-3 px-5'>
            <p>software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         </div>
         }
      </div>
    </div>
  )
}

export default Modal