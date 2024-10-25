import { serve } from "https://deno.land/std/http/server.ts";

serve(() => new Response("Useless API endpoint"), { port: 8000 });
console.log("Useless API running on http://localhost:8000");
