import axios from 'axios';
import type { TodoRequestType, TodoResponseType } from '../types/todos';

export const postTodo = (payload: TodoRequestType) =>
  axios.post<TodoResponseType>('/api/todos', payload).then((res) => res.data);
