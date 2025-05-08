import app from './app';
import db from './models';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // await db.sequelize.authenticate();
    await db.sequelize.sync();
    console.log('Database synced');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
  }
};

startServer();
