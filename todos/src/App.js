import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

const App = () => {

  var todoList = [];


  const todos = [
    {
      id: 't1',
      title: 'Learn React',
    },
    {
      id: 't2',
      title: 'Master React',
    },
    {
      id: 't3',
      title: 'Explore the course',
    },
  ];

  function newTodoHandler(todoData) {

    var id = todoList.length.toString()

    todoList.push(new TodoData(id, todoData.title));
    console.log(todoList);
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

      { todoList.map((todo) => {
        return <Todo key={todo.id} text={todo.title} />
      }) }

    </div>
  );
}

export default App;
