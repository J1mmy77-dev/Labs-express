import { Router } from 'express';
import { EquipmentController } from '../controllers/equipment.controller';
import { validateCreateEquipment } from '../middlewares/validateEquipment.middleware';

const router = Router();

router.get('/', EquipmentController.getEquipment);
router.post('/', validateCreateEquipment, EquipmentController.createEquipment);

export default router;
