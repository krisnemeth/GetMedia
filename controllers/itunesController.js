var iTunesController = function ($scope, $http) {
  $scope.searchiTunes = function (artist) {
    $http
      .jsonp("http://itunes.apple.com/search", {
        params: {
          callback: "JSON_CALLBACK",
          term: artist,
        },
      })
      .then(onSearchComplete, onError);
  };

  var onSearchComplete = function (response) {
    $scope.data = response.data;
    $scope.songs = response.data.results;
  };

  var onError = function (reason) {
    $scope.error = reason;
  };
};
