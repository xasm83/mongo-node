var meanApp = angular.module('meanApp', ['meanServices']);

meanApp.controller('clientController', function ($scope, postsService) {
    $scope.posts = postsService.getPosts();
});