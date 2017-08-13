    var express = require('express');
    var app=express();

    app.use(express.static('../client'))

    
    var  appData  =require('../data.json');

    var  seller=appData.seller;
    var  goods=appData.goods;
    var  ratings=appData.ratings;


    var apiRouter=express.Router();

    apiRouter.get('/seller',function(req,res){
        res.json({
            errno : 0,
            data :seller
        });
    });

    apiRouter.get('/goods',function(req,res){
        res.json({
            errno : 0,
            data :goods
        });
    });


    apiRouter.get('/ratings',function(req,res){
        res.json({
            errno : 0,
            data :ratings
        });
    });


    app.use('/api',apiRouter);

    app.server = app.listen(8080, function (req, res) {
        console.log('success')
        console.log('http://localhost:8080')
    })