var meanServices = angular.module('meanServices',['ngResource']);

meanServices.factory('postsService', function ($resource) {
    return $resource('posts', {}, {
        getPosts: {method: 'GET', params: {}, isArray: true}
    });
});