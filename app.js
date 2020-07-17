const express = require("express");
const app = express();
const fs = require("fs");
const Tesseract = require('tesseract.js');

app.post('/', function(req, res) {
    var image = req.param('image');
    var lang = req.param('lang');

    res.send(ocr);

    Tesseract.recognize(
        `url(${image})`,
        `${lang}`,
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      var ocr = text;
      console.log(text);
    })
    
  });


