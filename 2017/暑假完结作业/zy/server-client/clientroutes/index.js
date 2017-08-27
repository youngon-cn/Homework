    /* GET home page. */
    var Mongodb = require('../operation/database.js');
    var connect_database = 'mongodb://localhost:27017/booksdata';
    var datasheet = 'goodbooks';

    /* GET users listing. */
    exports.index = function(req, res){
    // console.log('success')
    var lookfordata = {};
    function callback(datajson) {
      // console.log(datajson)
      res.json({data: datajson})
    }
    Mongodb.lookfor(connect_database, datasheet, lookfordata, callback);
    };