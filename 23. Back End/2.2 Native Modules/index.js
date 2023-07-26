/**var fs = require('fs');

var content = 'haido!';

fs.writeFile('message.txt', content, err => {
  if (err) {
    console.error(err);
  }
});
*/
var fs = require('fs');
fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err)
        return;
    }
    console.log(data)
})
