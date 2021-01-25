const data = fetch('https://api.github.com/users/denoland')

// fetch JSON
data.then((response) => {
  return response.json();
}).then((jsonData) => {
  console.log(jsonData);
});

const text = fetch("https://deno.land/");

// ooutput HTML Data
text.then((response) => {
  return response.text();
}).then((textData) => {
  console.log(textData);
});

/**
 * Output: Error Message
 */
const error = fetch("https://does.not.exist/");

error.catch((error) => console.log(error.message));

// deno run --allow-net example/fetchData.ts