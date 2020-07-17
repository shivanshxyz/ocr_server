const express = require("express");
const app = express();
const fs = require("fs");
const Tesseract = require('tesseract.js');


const PORT = 3000  ;

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
    })

    res.send(ocr);

    
  });

  app.get('/', function (req, res) {
    res.send(`running at port ${PORT}`)
  })


