import { Router } from 'express';
import { userController } from '.';

const router = Router();

router.post('/approve', (request, response) => {
  return userController.handle(request, response);
});

export { router };
