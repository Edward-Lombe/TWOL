var mongoose = require('mongoose');
var Models = require('.././models/list.js')(mongoose);
var List = Models.List;
var Project = Models.Project;
module.exports = function(app){

  app.post('/api/add/project',function(req,res){
    Project.create({
      title: req.body.title,
      content: req.body.content,
      date: req.body.date
    }, function(err,project){
      if(err){
        res.send(err);
      }
      Project.find(function(err,projects){
        if(err){
          res.send(err);
        }
        
        res.json(projects);
      });
    });
  });

  app.get('/api/get/project',function(req,res){
    Project.find(function(err, projects){
      if(err){
        res.send(err);
      }
      res.json(projects);
    });
  });

  app.delete('/api/delete/project/:project_id', function(req, res) {
    Project.remove({
      _id : req.params.project_id
    }, function(err, project) {
      if (err){
        res.send(err);
      }
      List.find(function(err, projects) {
        if (err){
          res.send(err);
        }
        res.json(projects);
      });
    });
  });

};



























  