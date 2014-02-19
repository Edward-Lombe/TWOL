// function listControl($scope,$http){

//   $scope.newListItem = {};

//   $http.get('api/list')
//     .success(function(data){
//       $scope.list = data;
//       console.log(data);
//     })
//     .error(function(data){
//       console.log('Error: ' + data);
//     });

//   $scope.add = function(){
//     if($scope.newListItem.text){
//       $http.post('api/add', $scope.newListItem)
//       .success(function(data){
//         $scope.newListItem = {};
//         $scope.list = data;
//         console.log(data);
//       });
//     }
//   };
//   $scope.delete = function(id) {
//     $http.delete('/api/todos/' + id)
//       .success(function(data) {
//         $scope.list = data;
//         console.log(data);
//       })
//       .error(function(data) {
//         console.log('Error: ' + data);
//       });
//   };
// }

function homePage($scope,$http){



}

function projectControl($scope,$http){

  $scope.newProject = {};
  $scope.newProject.date = new Date();  

  $http.get('/api/get/project')
    .success(function(data){
      $scope.projects = data;
    })
    .error(function(data){
      console.log('Error ' + data);
    });

  $scope.add = function(){
    if(hasData($scope.newProject)){
      $http.post('/api/add/project',$scope.newProject)
      .success(function(data){
        $scope.newProject = {};
        $scope.projects = data;
      });
    }
  };

  $scope.delete = function(id){
    if (window.confirm('Are you sure?')){
      $http.delete('/api/delete/project/' + id).
        success(function(data){
          $scope.projects = data;
        });
    }
  
  };

  function hasData(project){
    if(project.title && project.content && project.date){
      return true;
    } else {
      return false;
    }
  }

  function formatDates(date){
    formatedDate = new Date(date).toString();
    return formatedDate;
  }


}


















