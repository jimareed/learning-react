import { useState } from 'react';

import DeleteModal from './DeleteModal';
import Backdrop from './Backdrop';


function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function deleteConfirmedHandler() {
      props.onDeleteTodo(props.todo.id)
      setModalIsOpen(false);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
      <div>
      <div className='card'>
        <h2>{props.todo.title}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <DeleteModal onCancel={closeModalHandler} onConfirm={deleteConfirmedHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
      <p />
      </div>
    );
}

export default Todo;