import { useState } from 'react';

import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

const App = () => {
  const [ todos, setTodos ] = useState([]);
  const [ nextId, setNextId ] = useState(0);

  function newTodoHandler(todoData) {

    var id = nextId.toString()

    setNextId(nextId+1);
    setTodos(current => [...current, new TodoData(id, todoData.title)]);
  }

  function deleteTodoHandler(todoId) {
    setTodos((current) => current.filter((todo) =>todo.id !== todoId))
  }

  function TodoData(id, title) {
    this.id = id;
    this.title = title;
  }

  return (
    <div>
      <h1>My Todos</h1>

      <NewTodo onNewTodo={newTodoHandler} />

      { todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} onDeleteTodo={deleteTodoHandler} />
      }) }

    </div>
  );
}

export default App;
