angular.module('f1CdtAdpq').config(function($urlRouterProvider, $stateProvider) {
  $stateProvider
  .state('userEdit', {
    url: '/user/edit',
    templateUrl: 'states/user/states/edit/edit.html',
    controller: 'UserEditController',
  })
  .state('user', {
    url: '/user',
    templateUrl: 'states/user/user.html',
    controller: 'UserController',
  })
  .state('userReset', {
    url: '/user/reset',
    templateUrl: 'states/user/states/reset/reset.html',
    controller: 'UserResetController',
  })
  .state('userRegister', {
    url: '/user/register',
    templateUrl: 'states/user/states/register/register.html',
    controller: 'UserRegisterController',
  });
});
