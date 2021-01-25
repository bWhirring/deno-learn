# [DENO](https://deno.land/)

> Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.

## Comparison to Node.js
1. Deno does not use npm.
   * It uses modules referenced as URLs or file paths.
   Deno does not use package.json in its module resolution algorithm.

2. All async actions in Deno return a promise. Thus Deno provides different APIs than Node.

3. Deno requires explicit permissions for file, network, and environment access.

4. Deno always dies on uncaught errors.

5. Uses "ES Modules" and does not support require(). Third party modules are imported via URLs: