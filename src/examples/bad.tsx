import { useEffect, useState } from 'react';
import { Todos } from '../components/todos';
import { getTodos } from '../api/get-todos';
import { postTodo } from '../api/post-todo';
import type { TodoResponseType } from '../types/todos';

export function BadExample(props: React.HTMLAttributes<HTMLDivElement>) {
  const [todos, setTodos] = useState<TodoResponseType[]>([]);

  useEffect(() => {
    const ctrl = new AbortController();

    getTodos(ctrl.signal).then((todos) => {
      setTodos(todos);
    });

    return () => {
      ctrl.abort();
    };
  }, []);

  const handleAddTodo = (title: string) =>
    postTodo({ title })
      .then((newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
      })
      .catch(() => {
        // notify user...
      });

  return (
    <div {...props}>
      <h2 className="mb-10 text-lg">👎 Updating UI after async action finishes</h2>
      <Todos.List todos={todos} />
      <Todos.Form onSubmit={handleAddTodo} />
    </div>
  );
}
