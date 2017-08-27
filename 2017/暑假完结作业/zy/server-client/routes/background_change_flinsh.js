    var Mongodb = require('../operation/database.js');  
    var connect_database = 'mongodb://localhost:27017/booksdata';
    var datasheet = 'goodbooks';

    /* GET users listing. */
    exports.background_changes_flinshs = function(req, res){
        var content = {"name": req.query.getup};
        var changecontent = {"types": req.body.book_select, "naem":req.body.book_name, "auther": req.body.book_auther, "size": req.body.book_size, "num": req.body.book_num, "introduce": req.body.book_introduce}
        //console.log(changecontent);
        function callback(datajson) {
        console.log(datajson)
        res.render('background_change_flinsh', {data: datajson})
        }
        Mongodb.update(connect_database, datasheet,  content, changecontent, callback);
    };