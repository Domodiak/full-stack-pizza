import { Pool } from "pg"

const pool = new Pool({
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT || "5432"),
    host: "localhost",
})

export default pool