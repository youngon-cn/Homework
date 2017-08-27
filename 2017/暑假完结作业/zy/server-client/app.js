    var express = require('express');
    var http = require('http');
    var path = require('path');
    var favicon = require('static-favicon');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    var multer  = require('multer');
 
     // 客户端
    var clientroutes = require('./clientroutes/index');
    var getups = require('./clientroutes/getup');

    var users = require('./routes/user');
    var update = require('./operation/update');
    var updated = require('./routes/updates');
    var loadings = require('./routes/loading');
    var loadings_resules = require('./routes/loading_resule');
    var background = require('./routes/background');
    var background_look = require('./routes/background_look');
    var background_delect = require('./routes/background_delect');
    var background_change = require('./routes/background_change');
    var background_animation = require('./routes/background_animation');
    var background_cancel = require('./routes/background_cancel');
    var background_change_flinsh = require('./routes/background_change_flinsh');

    var app = express();

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(favicon());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'dist')));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(app.router);


    /// 客户端
    app.get('/searchbook', clientroutes.index);
    app.post('/getup', getups.getup);

    // 服务器
    app.get('/users', users.list);
    var upload = multer({ storage: update.storge });
    app.post('/update', upload.fields([{name:'book_file'},{name:'book_image'}]), updated.updates);
    app.get('/loading',loadings.loading);
    app.get('/loading/resule',loadings_resules.loading_resule);
    app.get('/background', background.backgrounds);
    app.get('/background/look', background_look.background_looks);
    app.get('/background/delect', background_delect.background_delects);
    app.get('/background/change', background_change.background_changes);
    app.get('/background/animation', background_animation.background_animations);
    app.get('/background/cancel', background_cancel.background_cancels);
    app.post('/background/change/flinsh', background_change_flinsh.background_changes_flinshs);



    /// catch 404 and forwarding to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    /// error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: {}
        });
    });


    module.exports = app;
