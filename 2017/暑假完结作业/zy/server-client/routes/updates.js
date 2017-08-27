    var mime = require('mime');
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    var Mongodb = require('../operation/database.js');  
    var connect_database = 'mongodb://localhost:27017/booksdata';
    var datasheet = 'goodbooks';

    exports.updates = function(req, res){
    var image_end = req.files.book_image[0].originalname.split('.');
    var image_ends = image_end[image_end.length-1];
    // console.log(req.body);
    // console.log(req.query);
    // console.log(req.files);  
    var doc = {"types": req.body.book_select, "name": req.body.book_name, "animations": "不动画", "auther": req.body.book_auther, "gaden": req.body.book_gaden, "size": req.body.book_size, "num": req.body.book_num, "introduce": req.body.book_introduce,  "image": '../update/files/' + req.body.book_name + '.' + image_ends};
    function callback(datajson) {
      res.render('update', {data: datajson})
    }
    Mongodb.insert(connect_database, datasheet, doc, callback);
    
    };
