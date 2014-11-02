var app = angular.module('famous-university', ['famous.angular'])

app.controller('Lesson3Ctrl', [ '$scope', '$famous', function($scope, $famous){
  var Transitionable = $famous['famous/transitions/Transitionable'];
  var Easing = $famous['famous/transitions/Easing'];

  $scope.boxes = [];

  var arrayOfCurves = ['inOutQuad', 'inOutCubic', 'outQuint', 'outBack', 'inCirc', 'outElastic'];

  for (var i = 0; i < arrayOfCurves.length; i++) {
    var box = {
      curve: arrayOfCurves[i],
      position: new Transitionable([0, i * 75, 0])
    };
    $scope.boxes.push(box);
  }

  $scope.animate = function() {
    for (var i = 0; i < $scope.boxes.length; i++) {
      var box = $scope.boxes[i];
      box.position.set([200, i * 75, 0], {
        curve: Easing[box.curve],
        duration: 2000
      });
    }
  }
  }
]
);
