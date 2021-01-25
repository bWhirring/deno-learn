const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);

// deno run --allow-net http_request.ts https://example.com
// deno run --allow-net=example.com http_request.ts https://example.com