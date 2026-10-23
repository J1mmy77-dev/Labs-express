import { Router } from 'express';
import { EnvironmentController } from '../controllers/environments.controller';
import { validateEnvironmentPayload } from '../middlewares/validateEnvironment.middleware';

const router = Router();

router.get('/', EnvironmentController.getEnvironments);
router.post('/', validateEnvironmentPayload, EnvironmentController.createEnvironment);

export default router;

