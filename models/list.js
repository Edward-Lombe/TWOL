module.exports = function(mongoose){
  var Models = {
    List : mongoose.model('List',{
      text: String
    }),
    Article : mongoose.model('Article',{
      title: String,
      body: String,
      time: Date
    })
  };
  return Models;
};

