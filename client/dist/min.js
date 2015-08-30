/*! mean-client 2015-03-31 */

var myModule=angular.module("meanServices",[ngRresource]);myModule.factory("postsService",function(){return $resource("posts",{},{getPosts:{method:"GET",params:{},isArray:!0}})});var meanApp=angular.module("meanApp",["meanServices"]);meanApp.controller("clientController",function(a,b){a.posts=b.getPosts(),a.myVar="df"});
//# sourceMappingURL=min.js.map