    var Mongodb = require('../operation/database.js');  
    var connect_database = 'mongodb://localhost:27017/booksdata';
    var datasheet = 'goodbooks';

    /* GET users listing. */
    exports.background_looks = function(req, res){
    var lookfordata = {"name": req.query.getup};
    function callback(datajson) {
      console.log(datajson)
      res.render('background_look', {data: datajson})
    }
    Mongodb.lookfor(connect_database, datasheet, lookfordata, callback);
    };
