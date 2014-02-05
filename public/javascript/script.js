function listControl($scope,$http){

  $scope.newListItem = {};

  $http.get('api/list')
    .success(function(data){
      $scope.list = data;
      console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data);
    });

  $scope.add = function(){
    if($scope.newListItem.text){
      $http.post('api/add', $scope.newListItem)
      .success(function(data){
        $scope.newListItem = {};
        $scope.list = data;
        console.log(data);
      });
    }
  };
  $scope.delete = function(id) {
    $http.delete('/api/todos/' + id)
      .success(function(data) {
        $scope.list = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

}