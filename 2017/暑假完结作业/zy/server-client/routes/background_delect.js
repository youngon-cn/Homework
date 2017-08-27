  var Mongodb = require('../operation/database.js');  
  var connect_database = 'mongodb://localhost:27017/booksdata';
  var datasheet = 'goodbooks';


  /* delect filedata. */
  exports.background_delects = function(req, res){
    var datas = {"name": req.query.gitup};
    function callback(datajson) {
      console.log(datajson)
      res.render('background_delect', {data: datajson})
    }
    Mongodb.remove(connect_database, datasheet, datas, callback);
  };
