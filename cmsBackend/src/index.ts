import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.get('/test', (c) => {
  return c.text('Test!');
});

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
