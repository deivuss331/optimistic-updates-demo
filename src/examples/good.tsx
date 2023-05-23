import { useEffect, useState } from 'react';
import { Todos } from '../components/todos';
import { getTodos } from '../api/get-todos';
import { postTodo } from '../api/post-todo';
import type { TodoResponseType } from '../types/todos';

export function GoodExample(props: React.HTMLAttributes<HTMLDivElement>) {
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

  const handleAddTodo = (title: string) => {
    const tempId = Date.now();

    setTodos((prevTodos) => [...prevTodos, { id: tempId, title }]);

    postTodo({ title })
      .then((newTodo) => {
        setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === tempId ? newTodo : todo)));
      })
      .catch(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== tempId));
        // notify user...
      });
  };

  return (
    <div {...props}>
      <h2 className="mb-10 text-lg">👍 Updating UI optimistically</h2>
      <Todos.List todos={todos} />
      <Todos.Form onSubmit={handleAddTodo} />
    </div>
  );
}
