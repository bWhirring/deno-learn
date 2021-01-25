const text = Deno.readTextFile('./test.json')

text.then(r => {
  console.log(r);
})