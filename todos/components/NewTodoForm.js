import { useRef } from 'react';


function NewTodoForm(props) {

    const titleInputRef = useRef();

    function cancelHandler(event) {
        event.preventDefault();
    
        props.onCancel();
    }

    function submitHandler(event) {
        event.preventDefault();
    
        const enteredTitle = titleInputRef.current.value;
    
        const todoData = {
            id: "1",
            title: enteredTitle,
        };
    
        props.onNewTodo(todoData);
    }
      

    return ( 
        <div className='modal'>
            <h2>New Todo</h2>
            <form onSubmit={submitHandler}>
                <div>
                <label htmlFor='title'>Task Name </label>
                <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <p/>
                <div>
                <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
                <button className='btn'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default NewTodoForm;