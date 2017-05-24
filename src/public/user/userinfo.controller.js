(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['userInfo'];
function UserInfoController(userInfo){
	var infoCtrl = this;

	infoCtrl.basePath = 'https://boiling-reef-57823.herokuapp.com';
	console.log(userInfo);

	if (userInfo != undefined) {
	infoCtrl.firstName = userInfo[0];
	infoCtrl.lastName = userInfo[1];
	infoCtrl.email = userInfo[2];
	infoCtrl.phone = userInfo[3];
	infoCtrl.favDish = userInfo[4];
	infoCtrl.validUser = true;
}
	else {
		infoCtrl.validUser = false;
	}





	};

})();