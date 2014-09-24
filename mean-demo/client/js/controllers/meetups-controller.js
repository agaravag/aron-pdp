app.controller('meetupsController', ['$scope', '$resource', function($scope, $resource){
  var Meetup = $resource('/api/meetups');

  Meetup.query(function (results) {
    $scope.meetups = results;
  });

  $scope.meetups = [
    { name: "Ray", location: "texas", time: "one", food: "chips" },
    { name: "Melinda", location: "florida", time: "two", food: "pizza" }
  ];


  $scope.createMeetup = function () {
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.location = $scope.meetupLocation;
    meetup.time = $scope.meetupTime;
    meetup.food = $scope.meetupFood;
    meetup.$save(function (result) {
      $scope.meetups.push(result);
      $scope.meetupName = '';
      $scope.meetupLocation = '';
      $scope.meetupTime = '';
      $scope.meetupFood = '';
    });
  }; 
}]);


// $scope.createMeetup = function () {
  //   $scope.meetups.push({ 
  //        name: $scope.meetupName, 
  //     speaker: $scope.meetupSpeaker,
  //        time: $scope.meetupTime,
  //        food: $scope.meetupFood
  //   });
  //   //clears boxes after clicking button
  //   $scope.meetupName = '';
  //   $scope.meetupSpeaker = '';
  //   $scope.meetupTime = '';
  //   $scope.meetupFood = '';
  // }; 
