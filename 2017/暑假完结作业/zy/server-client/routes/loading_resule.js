        exports.loading_resule = function(req, res){
            console.log(req.query.names)
           if(req.query.names === '突突too' && req.query.password === '123456'){
               res.render('loading_result', {'data': 'success'})
           }else{
              res.render('loading_result', {'data': '用户名或密码错误'})
           }

        };