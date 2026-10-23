import { Router } from 'express';
import { UserController } from '../controllers/users.controller';
import { validateCreateUser } from '../middlewares/validateUser.middleware';

const router = Router();

router.post('/', validateCreateUser, UserController.createUser);

export default router;
