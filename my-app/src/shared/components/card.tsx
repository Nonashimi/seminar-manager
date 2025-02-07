import React from 'react'
import { Seminar } from '../../redux/slice/seminarSlice'
import {Edit, EllipsisVertical, Trash} from "lucide-react";
import Modal from './modal';
type Props = {
    cardItem: Seminar,
    openEditModal: (id: number) => void,
    openDeleteModal: (id: number) => void
}

function CardItem({cardItem, openDeleteModal, openEditModal}: Props) {
    const [isOpen, setIsOpen] = React.useState(false);
    // Карточка
  return (
    <>
        <div className='p-4 box-border shadow-2xl rounded-md bg-white relative group'>
            <div className="absolute top-4 right-4 transition-all duration-300 group-hover:opacity-100 opacity-0 flex flex-col gap-1">
                <div  
                    className="absolute  w-[30px] h-[30px] rounded-full transition-all duration-300 bg-white flex justify-center items-center cursor-pointer"
                    style={{top: isOpen?'34px':'0', right: '0px'}}
                    >
                    <Edit onClick={() => openEditModal(cardItem.id)} className='text-[#7a7777]' size={23}/>
                </div>
                <div 
                    className="absolute w-[30px] h-[30px] rounded-full transition-all duration-300 bg-white flex justify-center items-center cursor-pointer"
                    style={{top: isOpen?'68px':'0', right: '0px'}}
                    >
                    <Trash onClick={() => openDeleteModal(cardItem.id)} className='text-[#7a7777]' size={23}/>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className=" z-[2] w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center cursor-pointer">
                    <EllipsisVertical className='text-[#7a7777]' size={23}/>
                </div>
            </div>
            <img src={cardItem.photo} alt="" className='w-full h-[200px] object-cover' />
            <div className="text-[18px] min-h-[70px] py-2 font-bold line-clamp-2">{cardItem.title}</div>
            <div className="flex pb-2 justify-between text-[#7a7777] font-bold">
                <div className="">{cardItem.date}</div>
                <div className="">{cardItem.time}</div>
            </div>
            <div className="text-[14px] text-[#7a7777] line-clamp-2">{cardItem.description}</div>
        </div>
    </>
   
  )
}

export default CardItem