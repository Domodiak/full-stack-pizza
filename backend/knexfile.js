import dotenv from "dotenv"
dotenv.config({path: "../.env"})

console.log(process.env)

const config = {
  client: 'postgres',
  connection: {
    host: '127.0.0.1',
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  migrations: {
    directory: './migrations',
  },
};

export default config