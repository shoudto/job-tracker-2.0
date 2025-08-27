import dotenv from "dotenv"; // importing all info from .env files
import { createClient } from "@supabase/supabase-js"; // Connect to the official Supabase library

dotenv.config(); // keeps my key a secret

const supabaseUrl = "https://qckyppxsxptckoclbhzp.supabase.co"; // points to my supabase project
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // <-- READ MY SECRET KEY

// Create and Export the client
export const supabase = createClient(supabaseUrl, supabaseKey); // <-- reuse this anywhere in my server code.
