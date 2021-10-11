var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log(date)
console.log(time)


// include node fs module
var fs = require('fs');
fs.Dir = '/files';
 
// writeFile function with filename, content and callback function
fs.writeFile('./files/' + date + '_' + today.getSeconds() + ''+ '.txt', 'Learn Node FS module', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});