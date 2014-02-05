var mongoose = require('mongoose');
var Models = require('.././models/list.js')(mongoose);
var List = Models.List;
module.exports = function(app){
  app.get('/api/list',function(req,res){
    List.find(function(err,items){
      if(err){
        res.send(err);
      }
      res.json(items);
    });
  });

  app.post('/api/add',function(req,res){
    List.create({
      text:req.body.text
    }, function(err, list) {
      if (err){
        res.send(err);
      }
      // get and return all the todos after you create another
      List.find(function(err, items) {
        if (err){
          res.send(err);
        }
        res.json(items);
      });
    });
  });

  app.delete('/api/todos/:todo_id', function(req, res) {
    List.remove({
      _id : req.params.todo_id
    }, function(err, todo) {
      if (err){
        res.send(err);
      }
      // get and return all the todos after you create another
      List.find(function(err, items) {
        if (err){
          res.send(err);
        }
        res.json(items);
      });
    });
  });


};
  