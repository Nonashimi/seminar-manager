import React from 'react'
import Modal from './modal'

type Props = {
    children: React.ReactNode
}

function Body({children}: Props) {
  
  return (
    <div className='w-[1200px]  m-auto bg-white shadow-2xl rounded-2xl my-[70px]'>
        <div className="px-8 py-7 text-3xl font-bold ">Seminars</div>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <div className="px-8 py-4">
          {children}
        </div>
    </div>
  )
}

export default Body