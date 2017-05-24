(function () {
"use strict"

angular.module('public')
.service('UserService', UserService);

function UserService(){
	var service = this;

	service.storeUserData = function (firstName, lastName, email, phone = 0, favDish) {
		service.userInfo = [firstName, lastName, email, phone, favDish];
	}

	service.getUserData = function () {
		return service.userInfo;
	}
}

})();