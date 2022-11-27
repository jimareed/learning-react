import { useState } from 'react';

import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

const App = () => {
  const [ todos, setTodos ] = useState([]);

  function newTodoHandler(todoData) {

    var id = todos.length.toString()

    setTodos(current => [...current, new TodoData(id, todoData.title)]);
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
        return <Todo key={todo.id} text={todo.title} />
      }) }

    </div>
  );
}

export default App;
