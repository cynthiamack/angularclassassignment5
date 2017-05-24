(function () {
"use strict";

angular.module('public')
.controller('UserController', UserController);

UserController.$inject = ['$http', 'ApiPath', 'UserService'];
function UserController($http, ApiPath, UserService){
	var reg = this;
	reg.errorMessage = "Not a valid dish number";

	reg.getValidShortName = function (){
		var config = reg.user.shortName + ".json";

		return $http.get(ApiPath + '/menu_items/' + config).then(function (response) {
			console.log(response.data);
			reg.user.favDish = response.data;
			reg.error = false;
			UserService.storeUserData(reg.user.firstName, reg.user.lastName, reg.user.email, reg.user.phone, reg.user.favDish);
		}, function(response){
			reg.error = true;
		});
		};

	reg.submit = function () {
		reg.completed = true;
		reg.getValidShortName();

	};


}

})();