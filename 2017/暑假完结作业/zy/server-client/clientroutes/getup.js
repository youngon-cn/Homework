    /* GET getup page. */
    var Mongodb = require('../operation/database.js');
    var connect_database = 'mongodb://localhost:27017/booksdata';
    var datasheet = 'leaveword';

    /* GET getup listing. */
    exports.getup = function(req, res){
    console.log(req.body)
    var lookfordata = {};
    var way = {"name": 1};
    function callback(datajson) {
      // console.log(datajson)
      res.send({data: datajson})
    }

    // 为什么这里{} 不等于req.body产生的对象{} ?

    if (req.body.search !== '' && req.body.search !== null){
      console.log('o')
      var doc = {"word": req.body.search, "name": req.body.lookfor};
      Mongodb.inserts(connect_database, datasheet, doc);
    }

    Mongodb.lookfor_way(connect_database, datasheet, lookfordata, way, callback)
    };