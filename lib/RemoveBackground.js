const path = require('path');
const chalk = require('chalk');
const fetch = require('node-fetch');
const { spawn } = require('child_process');
const { fromBuffer } = require('file-type');
const request = require('request');
const fs = require('fs');
const kntl = require("../src/kntl.json");

/*
Remove Background from image file
don't forget to input X-Api-Key in 'src/kntl.json'
*/


 function Removed(buffer, size) {
let API = (kntl.rmbg)
return new Promise(async (resolve, reject) => {
  try {
request.post({
  url: 'https://api.remove.bg/v1.0/removebg',
  formData: {
    image_file: buffer ? fs.createReadStream(buffer) : fs.createReadStream('./src/SGDC.jpg')
    size: size ? size : 'auto',
  },
  headers: {
    'X-Api-Key': API;
  },
  encoding: null
 }, function(error, response, body) {
  if(error) return console.error(chalk.red('TERJADI KESALAHAN:\n\n', error));
  if(response.statusCode != 200) return console.error(chalk.red('RESPONSE ERROR:\n\n', response.statusCode, body.toString('utf8')));
  if (response.status === 200 || response.statusCode === 200) { 
  fs.writeFileSync("no-bg.png", body);
       }
    });
    } catch (e) {
      reject(e)
    }
   })
  }
  
module.exports = Removed 
