(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://boiling-reef-57823.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
