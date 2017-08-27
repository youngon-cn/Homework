    var Mongodb = require('../operation/database.js');  
    var connect_database = 'mongodb://localhost:27017/booksdata';
    var datasheet = 'goodbooks';

    /* GET users listing. */
    exports.background_animations = function(req, res){
    var content = {"name": req.query.gitup};
    console.log(content)
    var changecontent = {"animations": '动画'}
    function callback(datajson) {
    // console.log(datajson)
    res.render('background_animation', {data: datajson})
    }
    Mongodb.update(connect_database, datasheet,  content, changecontent, callback)
    };
