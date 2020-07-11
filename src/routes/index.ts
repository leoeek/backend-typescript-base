import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  const teste = 'sim';
  return response.json({ status: true });
});

export default routes;
