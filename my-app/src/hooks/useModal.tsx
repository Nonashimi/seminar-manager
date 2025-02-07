import { useState } from "react";


export const useModal = () => {
    // this method for open and close modal
         const [isOpen, setIsOpen] = useState(false);
        const [id, setId] = useState(0);
        const openModal = (id: number) => {
            setIsOpen(true);
            setId(id);
        }

        const closeModal = () => {
            setIsOpen(false);
        }

        return {
            isOpen, 
            id,
            openModal,
            closeModal
        }
}