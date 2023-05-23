import axios from 'axios';
import type { TodosResponseType } from '../types/todos';

export const getTodos = (signal: AbortSignal) =>
  axios
    .get<TodosResponseType>('/api/todos', {
      signal,
    })
    .then((res) => res.data);
