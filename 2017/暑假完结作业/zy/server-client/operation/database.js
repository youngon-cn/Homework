    // mongodb数据库查询方式
    // 需要在引入的地方定义一个回掉函数
    
    var mongo = require('mongoskin'); //
    module.exports = {
        // find为用那种方式查找以及查找的内容  find findOne 
        //$lt, $lte, $gt, $gte $ne 分别代表 <, <=, >, >=, !==
        //使用方式 ({age:{$lte:'3'}}
        // connect_database 如 'mongodb://localhost:27017/数据库'
    lookfor : function (connect_database,  datasheet , lookfordata, callback) {
        var db = mongo.db(connect_database);
        db.collection(datasheet).find(lookfordata).toArray(function(error, results) {
          // console.log({"data": results});
          if(error){
            console.log('connection false');
            return callback();
            db.close();
          }
          else {
            console.log('success')
            return callback(results);
            db.close();
           // console.log(data);
          }
      })
    },


    //按不同的方式排序
    lookfor_way : function (connect_database,  datasheet , lookfordata, way, callback) {
        var db = mongo.db(connect_database);
        db.collection(datasheet).find(lookfordata).sort(way).toArray(function(error, results) {
          // console.log({"data": results});
          if(error){
            console.log('connection false');
            return callback();
            db.close();
          }
          else {
            console.log('success')
            return callback(results);
            db.close();
           // console.log(data);
          }
      })
    },

    //增加数据
    insert : function (connect_database, datasheet, doc, callback) {
      var db = mongo.db(connect_database);
      if( db ){
        db.collection(datasheet).insert(doc, function(error){
        if(error){
          console.log('connection false');
          return callback();
          db.close();
        } else {
            return callback('success');
            db.close();
        }
        })
      }
    },
    
    //增加数据(不含回调)
    inserts : function (connect_database, datasheet, doc) {
      var db = mongo.db(connect_database);
      if( db ){
        db.collection(datasheet).insert(doc, function(error){
        if(error){
          console.log('connection false');
          db.close();
        } else {
            console.log('success');
            db.close();
            return
        }
        })
      }
    },
  

    //更新局部
    update : function (connect_database, datasheet, content, changecontent, callback) {
      var db = mongo.db(connect_database);
      if( db ){
        // 使用形式 {}
        // changecontent 更新一部分内容用$set ($set (更新字段)   <------>   $unset (删除字段))
        db.collection(datasheet).update(content, {$set: changecontent}, function(error,result){
          if(error){
            console.log('connection false');
            return callback();
            db.close();
          }
          else {
            return callback('success');
            db.close();
          }
        })
      }
    },

   //更新全部
    updateall : function (connect_database, datasheet, content, changecontent, callback) {
      var db = mongo.db(connect_database);
      if( db ){
        // 使用形式 {}
        // changecontent 更新一部分内容用$set ($set (更新字段)   <------>   $unset (删除字段))
        db.collection(datasheet).update(content, (changecontent), function(error,result){
          if(error){
            console.log('connection false');
            return callback();
            db.close();
          }
          else {
            return callback('success');
            db.close();
          }
        })
      }
    },
    
    //移除
    remove : function (connect_database, datasheet, datas, callback) {
      var db = mongo.db(connect_database);
      if( db ){
        db.collection(datasheet).remove(datas, function(error, result){
          if(error){
            console.log('connection false');
            return callback();
            db.close();
          } else {
            return callback('success');
            db.close();
          }
        })
      }
    }

}
