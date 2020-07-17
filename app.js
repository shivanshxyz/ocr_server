const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
const Tesseract = require('tesseract.js');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
 
const PORT =  process.env.PORT || 3000  ;

app.post('/', function(req, res) {
    var image = req.body.image;
    var lang = req.body.lang;


    Tesseract.recognize(
        `url(${image})`,
        `${lang}`,
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      var ocr = text;
      console.log(text);
      res.send(ocr);
    })

    
  });

  app.get('/', function (req, res) {
    res.send(`running at port ${PORT}`)
  })

  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
  // app.listen(PORT, () => console.log('hello world'))


