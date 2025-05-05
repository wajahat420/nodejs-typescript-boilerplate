# Omnichannel Node.js Boilerplate

This is a Node.js boilerplate project using TypeScript and MySQL, designed for building scalable backend applications.

## 📁 Project Structure

├── src/
│ ├── server.ts
│ └── ... (other source files)
├── dist/ # Compiled JS output (after build)
├── .env # Environment variables
├── tsconfig.json # TypeScript configuration
├── package.json
└── README.md

## ⚙️ Environment Configuration

Create a `.env` file in the root of the project with the following content:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=omnichannel
DB_DIALECT=mysql
DB_PORT=3306

⚠️ Note: Do not commit sensitive credentials or .env files to version control.

🚀 Getting Started

1. Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

2. Install dependencies
npm install

3. Set up the .env file
Use the sample environment variables above and save them in .env.

4. Run the development server
npm run dev

This will start the app using ts-node-dev with hot reloading enabled.