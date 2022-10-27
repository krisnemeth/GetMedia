var iTunesController = function ($scope, $https) {
  $scope.searchiTunes = function (artist) {
    $https
      .jsonp("https://itunes.apple.com/search", {
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
