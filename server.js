const crypt = require ('./models/crypt');

const express = require('express');
const bodyParser = require('body-parser');
const isUrl = require('is-url');

const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
  const url = req.body.url;
  try {
    res.send('<a href="http://localhost:'+ port +'/'+ crypt.encrypt(url) +'">' + crypt.encrypt(url) + '</a>');
  }
  catch(exception) {
    console.log('Couldn\'t proccess your request');
  }
  res.end();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:url', (req, res) => {
  
  const url = req.params.url;
  try {
    const newUrl = 'http://' + crypt.decrypt(url);
    if(isUrl(newUrl)) {
      res.redirect(302, newUrl);
    } else{
      res.send('Please enter a valid URL');
    }
  }
  catch(exception) {
    // favicon request ...
    console.log('Couldn\'t proccess your request');
  }
  res.end();
});

app.listen(port, () => {
  console.log('Server running at ' + port);
});
