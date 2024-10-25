import { serveDir } from "https://deno.land/std/http/file_server.ts";
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8080 });

console.log("Server running on http://localhost:8080");

for await (const req of server) {
  serveDir(req, { fsRoot: "./" });  // Serve files from the current directory
}
