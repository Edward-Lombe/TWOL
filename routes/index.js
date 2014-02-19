
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'The Work of Lombe'
  });
};
exports.musings = function(req,res){
  res.render('musings',{
    title: 'The Work of Lombe'
  });
};
exports.projects = function(req,res){
  res.render('projects',{
    title: 'The Work of Lombe'
  });
};
exports.contact = function(req,res){
  res.render('contact',{
    title: 'The Work of Lombe'
  });
};
exports.login = function(req,res){
  res.render('login');
};
exports.update = function(req,res){
  res.render('update');
};