import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { initialSeminarState, updateSeminar } from '../../redux/slice/seminarSlice';
import { store } from '../../redux/store/store';

type Props = {
    id: number;
    closeEditModal: () => void;
};

function EditItem({ id, closeEditModal }: Props) {
    const seminar = useSelector((state: initialSeminarState) => state.seminars.seminars).find(seminar => seminar.id === id);


    // Значение которые можно изменить в редакторе 
    const [title, setTitle] = useState(seminar?.title || '');
    const [description, setDescription] = useState(seminar?.description || '');
    const [date, setDate] = useState(seminar?.date || '');
    const [time, setTime] = useState(seminar?.time || '');

    // Обновление карточки
    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        store.dispatch(updateSeminar({ id, title, description, date, time, photo: seminar?.photo || '' }));
        closeEditModal(); // Закрытие модального окна
    };

    return (
        <div className='p-4 bg-white rounded-lg'>
            <h2 className="text-xl font-bold mb-4">Edit Seminar</h2>
            <form onSubmit={handleUpdate} className="grid gap-4">
                <div className="flex flex-col">
                    <label className="font-bold text-gray-700">Title:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-gray-700">Description:</label>
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-gray-700">Date:</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-gray-700">Time:</label>
                    <input 
                        type="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                </div>
                <div className="flex gap-2">
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Save Changes
                    </button>
                    <button 
                        type="button" 
                        onClick={closeEditModal} 
                        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditItem;
