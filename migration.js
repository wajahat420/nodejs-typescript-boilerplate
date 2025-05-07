#!/usr/bin/env node
require('dotenv').config();
const { execSync } = require('child_process');
const os = require('os');
const { Sequelize } = require('sequelize');

// DB config
const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: false,
});

function getUsername() {
  try {
    const gitUser = execSync('git config user.name').toString().trim();
    return gitUser || os.userInfo().username || 'unknown';
  } catch {
    return os.userInfo().username || 'unknown';
  }
}

(async () => {
  try {
    // Step 1: Get already-applied migrations
    const [beforeMigrations] = await sequelize.query(`SELECT name FROM sequelizeMeta`);
    const alreadyRan = new Set(beforeMigrations.map(m => m.name));

    // Step 2: Run migrations
    const output = execSync('npx sequelize-cli db:migrate', { encoding: 'utf8' });
    console.log(output);

    // Step 3: Get migrations after run
    const [afterMigrations] = await sequelize.query(`SELECT name FROM sequelizeMeta`);
    const newlyRan = afterMigrations.filter(m => !alreadyRan.has(m.name));

    // Step 4: Insert a log for each new migration
    const username = getUsername();
    for (const migration of newlyRan) {
      await sequelize.query(`
        INSERT INTO migrationlogs (fileName, username)
        VALUES (?, ?)
      `, {
        replacements: [migration.name, username],
      });
      console.log(`Logged migration: ${migration.name}`);
    }

    await sequelize.close();
  } catch (err) {
    console.error('Migration logging failed:', err);
    process.exit(1);
  }
})();
