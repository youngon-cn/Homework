    var Mongodb = require('../operation/database.js');  
    var connect_database = 'mongodb://localhost:27017/booksdata';
    var datasheet = 'goodbooks';

    /* GET users listing. */
    exports.background_changes = function(req, res){
        var lookfordata = {"name": req.query.gitup};
        function callback(datajson) {
        console.log(datajson)
        res.render('background_change', {data: datajson, bookname: req.query.gitup})
        }
        Mongodb.lookfor(connect_database, datasheet, lookfordata, callback);
    };
