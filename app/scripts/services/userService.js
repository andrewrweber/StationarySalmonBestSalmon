app
  .service('UserService', ['$http', '$stateParams', function($http, $stateParams) {
    this.get = function(id) {
      return $http.get('/api/users/' + id);
    }
  }]);