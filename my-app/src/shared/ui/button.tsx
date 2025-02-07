import React from 'react'

type Props = {
    onClick?: () => void,
    children: React.ReactNode
}

function Button({children, onClick}: Props) {
  return (
    <button className='w-[200px] py-4 rounded-xl bg-[#203944] flex justify-center text-white text-[18px]' onClick={onClick}>{children}</button>
  )
}

export default Button