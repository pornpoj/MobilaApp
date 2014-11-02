angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope) {



})


.controller('SearchCtrl', function($scope) {

	$scope.items = [
    { id: 1, Name: 'Pornpoj Ketkaew', NameBooks: 'Visual C++', image: 'http://upload.siamza.com/file_upload/modify/011114/1565638.jpg' },
    { id: 2, Name: 'Supakit Boom', NameBooks: 'JAVA', image: 'http://upload.siamza.com/file_upload/modify/011114/1565690.jpg' },
    
    
  ];





  
})


.controller('booksCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})



.controller("MyCtrl", function($scope){
  $scope.image = "https://www.google.com/images/srpr/logo11w.png";

  })

.controller('profileCtrl', function($scope) {
 $scope.fbLogin = function() {
    openFB.login(
        function(response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $scope.closeLogin();
                $scope.me();
            } else {
                alert('Facebook login failed');
            }
        },
        {scope: 'email,publish_actions'});
}



 $scope.fbLogout = function() {
    Facebook.logout(function() {
          $scope.$apply(function() {
            $scope.user   = {};
            $scope.login = false;  
          });
        });
}




 openFB.api({
        path: '/me',
        params: {fields: 'id,name'},
        success: function(user) {
            $scope.$apply(function() {
                $scope.user = user;
            });
        },
        error: function(error) {
            alert('Facebook error: ' + error.error_description);
        }
    })

})


.controller('addsCtrl', function($scope,$cordovaCamera) {
  $scope.takePicture = function() {
    var options = { 
        quality : 75, 
        destinationType : Camera.DestinationType.DATA_URL, 
        sourceType : Camera.PictureSourceType.CAMERA, 
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      
      $scope.imgURI="data:image/jpeg;base64,"+ imageData;


    }, function(err) {
      // An error occured. Show a message to the user
    });
  }
})


.controller('AccountCtrl', function($scope) {
});

