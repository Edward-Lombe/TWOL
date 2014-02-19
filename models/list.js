module.exports = function(mongoose){
  var Models = {
    List : mongoose.model('List',{
      text: String
    }),
    Project : mongoose.model('Project',{
      title: String,
      content: String,
      date: Date
    })
  };
  return Models;
};

