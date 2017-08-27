  var multer  = require('multer');

  module.exports ={
      storge: multer.diskStorage({
                destination: function (req, file, cb) {
                    var fileformat = (file.originalname).split('.');
                    console.log(fileformat[fileformat.length-1].toUpperCase());
                  if (((fileformat[fileformat.length-1]).toUpperCase()) === 'JPG' || 'JPEG' || 'PNG' || 'GIF') {
                    cb(null, './public/update/files');
                  } else {
                    cb(null, './public/update/files');
                  }
                },
                filename: function (req, file, cb) {
                  var fileformat = (file.originalname).split('.');
                  cb(null, req.body.book_name + '.' + fileformat[fileformat.length-1]);
                }
             })
    };
