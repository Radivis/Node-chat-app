const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// console.log(__dirname + '/../public');
// console.log(publicPath);

// app.get('/', function (req, res) {
//   res.sendFile(publicPath + '/index.html')
// })

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
