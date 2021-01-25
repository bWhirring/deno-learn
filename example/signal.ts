// console.log("Press Ctrl-C to trigger a SIGINT signal");
// for await (const _ of Deno.signal(Deno.Signal.SIGINT)) {
//   console.log("interrupted!");
//   Deno.exit();
// }

console.log("Press Ctrl-C to trigger a SIGINT signal");
await Deno.signal(Deno.Signal.SIGINT);
console.log("interrupted!");
Deno.exit();