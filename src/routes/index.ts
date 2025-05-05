import express, { Router } from 'express';
import attachUserId from '../middlewares/attachUserId';
import userRoute from './user.routes';

const router: Router = express();



router.use('/user', attachUserId, userRoute);


export default router;