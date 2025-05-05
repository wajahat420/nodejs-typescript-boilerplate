import express, { Router } from 'express';
import { UserController } from '../controllers';

// const router = Router();
// const router: Router = express();
const router: Router = express.Router();


router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;
