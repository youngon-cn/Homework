 /* GET home page. */
  var Mongodb = require('../operation/database.js');
  var connect_database = 'mongodb://localhost:27017/booksdata';
  var datasheet = 'goodbooks';
  var lookfordata = {};
  var content = {'tccccc': 'sasdadadaaaa1'};
  var changecontent = {'tccccc': '啊啊啊啊啊啊啊啊啊'};
  var datas = {'tccccc': 'sasdadadaaaa1'};

  exports.backgrounds = function(req, res){
    console.log(req.query.book_type);
    if (req.query.book_type) {
      var type = req.query.book_type;
    } else {
      var type = '';
    }
    function callback(datajson) {
      // res.send({'data': datajson});
      //console.log({'data': datajson});
      res.render('background', {'data': datajson, "type": type});
    }
    var mongodbs = Mongodb.lookfor(connect_database, datasheet, lookfordata,  callback);
  };
