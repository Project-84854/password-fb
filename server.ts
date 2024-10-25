import { serveDir } from "https://deno.land/std@0.185.0/http/file_server.ts";
import { serve } from "https://deno.land/std@0.185.0/http/server.ts";

const handler = (req: Request) => {
  return serveDir(req, { fsRoot: "./public" });  // Serve files from the "public" directory
};

console.log("Server running on http://localhost:8080");

serve(handler, { port: 8080 });
