import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { fetchSeminars, initialSeminarState } from '../../redux/slice/seminarSlice';
import { store } from '../../redux/store/store';
import CardItem from './card';
import Modal from './modal';
import { useModal } from '../../hooks/useModal';
import DeleteItem from './DeleteItem';
import EditItem from './EditItem';
import Skeleton from './Skeleton';

type Props = {}

function CardList({}: Props) {
    const seminars = useSelector((state: initialSeminarState) => state.seminars.seminars);
    const loading = useSelector((state: initialSeminarState) => state.seminars.loading);
    useEffect(() => {
      fetchData();
    },[]);
    const fetchData = async() => {
        await store.dispatch(fetchSeminars());
      }

      const editModal = useModal();
      const deleteModal = useModal();
  return (
    <>
    <Modal id = {editModal.id} isOpen = {editModal.isOpen} closeModal={editModal.closeModal} title={"Edit Card " + editModal.id}><EditItem id={editModal.id} closeEditModal={editModal.closeModal}/></Modal>
    <Modal id = {deleteModal.id} isOpen = {deleteModal.isOpen} closeModal={deleteModal.closeModal} title={'Delete Card ' + deleteModal.id}><DeleteItem closeDeleteModal={deleteModal.closeModal} id={deleteModal.id}/></Modal>
    <div className='grid grid-cols-4 gap-4'>
        {!loading && seminars.map((seminar) => (
          <CardItem openDeleteModal = {deleteModal.openModal} openEditModal={editModal.openModal} key={seminar.id} cardItem={seminar}/>
        ))}
        {
          loading && Array(8).fill(0).map((_, i) => <Skeleton key={i}/>)
        }
    </div>
    
    </>
  )
}

export default CardList