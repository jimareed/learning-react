import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

const App = () => {

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

  return (
    <div>
      <h1>My Todos</h1>

      <NewTodo />

      { todos.map((todo) => {
        return <Todo key={todo.id} text={todo.title} />
      }) }

    </div>
  );
}

export default App;
