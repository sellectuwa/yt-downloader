const colors = require('colors');
const fs = require('fs');
const readline = require('readline-sync');
const ytdl = require('ytdl-core');

console.log('YOUTUBE DOWNLOADER by sellectuwa'.rainbow.bold);

const videolink = readline.question('Enter video link: ').toString();
let videoname = readline.question('Enter video name: ').toString();

if (videoname == null && videoname === "") {
  videoname = "video"
}

try {
  ytdl(videolink).pipe(fs.createWriteStream(videoname + '.mp4'));
  console.log("Done! Video successfully downloaded!".green)
} catch (e) {
  console.log("Error! Video not found!".red);
}




