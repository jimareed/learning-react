import { useState } from 'react';

import NewTodoForm from './NewTodoForm';
import Backdrop from './Backdrop';



function NewTodo() {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function newHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
    <div>
        <div className='card' onClick={newHandler}>
            <h1 style={{textAlign: "center"}}>+</h1>
        </div>
        {modalIsOpen && <NewTodoForm onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
    );
}

export default NewTodo;