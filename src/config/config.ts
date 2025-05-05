import dotenv from 'dotenv';
dotenv.config();

export default {
  db: {
    host: process.env.DB_HOST!,
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    dialect: process.env.DB_DIALECT as any,
    port: Number(process.env.DB_PORT!)
  }
};
