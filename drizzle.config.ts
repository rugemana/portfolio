import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./lib/schema.ts", // or wherever your schema file is
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
};
