import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

export default {
  schema: "./lib/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    wranglerConfigPath: "./wrangler.toml",
    dbName: "postgres",
  },
} satisfies Config;
