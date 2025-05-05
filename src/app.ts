import dotenv from 'dotenv';
import express from 'express';
import { setUser } from './middlewares/setUser';
import routes from './routes';
dotenv.config();

const app = express();
app.use(express.json());

// Apply global middleware to set the user (for all routes)
app.use(setUser);

// Routes
app.use('/', routes);

export default app;
