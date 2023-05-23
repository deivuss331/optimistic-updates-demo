import { rest } from 'msw';

const getDelay = () => Math.floor(Math.random() * 500) + 150;

const todos = [
  {
    id: 1,
    title: 'Buy milk',
  },
  {
    id: 2,
    title: 'Go to gym',
  },
];

export const handlers = [
  rest.get('/api/todos', (_, res, ctx) => res(ctx.delay(350), ctx.status(200), ctx.json(todos))),

  rest.post('/api/todos', async (req, res, ctx) => {
    const { title } = await req.json();

    const newTodo = {
      id: Date.now(),
      title,
    };

    todos.push(newTodo);

    return res(ctx.delay(getDelay()), ctx.status(201), ctx.json(newTodo));
  }),
];
