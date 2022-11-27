import { useState } from 'react';

import DeleteModal from './DeleteModal';
import Backdrop from './Backdrop';


function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
      <div>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <DeleteModal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
      <p />
      </div>
    );
}

export default Todo;