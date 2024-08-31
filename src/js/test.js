const fs = require('fs');

const readShort = fs.createReadStream(__dirname + '/node.txt');
const writeShort = fs.createReadStream(__dirname + '/news.txt');

readShort.on('data', function (newDate) {
  console.log('New Data');
  writeShort.write(newDate);
});
