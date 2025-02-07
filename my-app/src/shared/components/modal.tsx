import { X } from 'lucide-react'
import React from 'react'

type Props = {
    children: React.ReactNode,
    title: string,
    closeModal: () => void,
    isOpen: boolean,
    id: number
}

function Modal({children, title, closeModal, isOpen, id}: Props) {
  // Модальное окно  
  return ( 
    <>
      {isOpen && (<div className='fixed z-10 top-0 left-0 w-full h-full bg-[#0000003b] bg-opacity-50 flex justify-center items-center'>
        <div className="w-[600px] bg-white rounded-xl">
            <div className="flex justify-between items-center p-6">
              <div className=" text-[18px] font-bold">{title}</div>
              <X size={20} className='cursor-pointer' onClick={closeModal}/>
            </div>
            <div className="w-full h-[1px] bg-gray-400"></div>
            <div className="p-6">
                {children}
            </div>
        </div>
    </div>)}
    </>
       
  )
  
}

export default Modal