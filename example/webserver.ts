import { serve } from "https://deno.land/std@0.84.0/http/server.ts"

const server = serve({ hostname: '0.0.0.0', port: 3002 })

console.log(`HTTP webserver running.  Access it at:  http://localhost:3002/`);

for await (const req of server) {
  let bodyContent = "Your user-agent is:\n\n";
  bodyContent += req.headers.get("user-agent") || "Unknown";
  req.respond({ body: bodyContent, status: 200 })

}
