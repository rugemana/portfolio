import type { Config } from "@drizzle-team/kit";
import * as dotenv from "dotenv";

dotenv.config(); // ✅ Load .env

console.log("Loaded DATABASE_URL:", process.env.DATABASE_URL); // 🐛 Debug check

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
