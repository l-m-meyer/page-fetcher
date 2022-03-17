/**
 * Program will download the resource at the URL to 
 * the local path on your machine inputted from the 
 * command line, then print a message.
 * 
 * @return {String} Downloaded and saved 3261 bytes to ./index.html
 */

const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const file = args[1];

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(`${file}`, body, error => {
    if (error) {
      console.log('error', error);
    } else {
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${file}`);
    }
  });
});