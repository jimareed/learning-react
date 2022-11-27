import { useState } from 'react';

import NewTodoForm from './NewTodoForm';
import Backdrop from './Backdrop';



function NewTodo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function openFormHandler(todoData) {
        setModalIsOpen(true);
    }

    function closeFormHandler() {
        setModalIsOpen(false);
    }

    function newTodoHandler(todoData) {
        props.onNewTodo(todoData)
        setModalIsOpen(false);
    }

    return (
    <div>
        <div className='card' onClick={openFormHandler}>
            <h1 style={{textAlign: "center"}}>+</h1>
        </div>
        {modalIsOpen && <NewTodoForm onCancel={closeFormHandler} onNewTodo={newTodoHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeFormHandler} />}
        <p />
    </div>
    );
}

export default NewTodo;