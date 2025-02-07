import React from 'react'
import Button from '../ui/button'
import { store } from '../../redux/store/store'
import { deleteSeminar } from '../../redux/slice/seminarSlice'

type Props = {
    id: number,
    closeDeleteModal: () => void,
}

function DeleteItem({id, closeDeleteModal}: Props) {

  // Удаляем семинар 
  const deleteItem = () => {
    store.dispatch(deleteSeminar(id));
    closeDeleteModal();
  }
  return (
    <div className='flex flex-col items-center gap-[30px]'>
        <div className="text-[20px] font-bold">Вы действительно хотите удалить карточку {id}?</div>
        <Button onClick={deleteItem}>Удалить</Button>
    </div>
  )
}

export default DeleteItem