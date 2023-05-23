import { useRef } from 'react';
import type { TodosResponseType } from '../types/todos';

interface TodosListProps {
  todos: TodosResponseType;
}

function TodosList({ todos }: TodosListProps) {
  return (
    <ul className="mb-4 space-y-1 divide-y-2">
      {todos.map(({ id, title }) => (
        <li key={id} className="pt-1 first:pt-0">
          {title}
        </li>
      ))}
    </ul>
  );
}

interface TodoFormProps {
  onSubmit: (title: string) => unknown;
}

function TodoForm({ onSubmit }: TodoFormProps) {
  const inputRef = useRef<HTMLInputElement>(null!);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const { value } = inputRef.current;
    if (value) {
      onSubmit(value);
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here..."
        className="rounded border border-slate-200 px-2 py-1 text-slate-700"
        name="title"
      />
      <button className="ml-2 rounded bg-blue-600 px-3 py-1" type="submit">
        Add
      </button>
    </form>
  );
}

/**
 * @example
 *
 * <Todos.List todos={todos} />
 * <Todos.Form onSubmit={onSubmit} />
 */
export const Todos = {
  List: TodosList,
  Form: TodoForm,
};
