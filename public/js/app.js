'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/landing',
      controller: 'LandingCtrl'
    }).
    when('/about', {
      templateUrl: 'partials/about',
      controller: 'AboutCtrl'
    }).
    when('/blog', {
      templateUrl: 'partials/blog',
      controller: 'BlogCtrl'
    }).
    when('/demo', {
      templateUrl: 'partials/demo',
      controller: 'DemoCtrl'
    }).
    when('/free', {
      templateUrl: 'partials/free',
      controller: 'FreeCtrl'
    }).
    when('/store', {
      templateUrl: 'store',
      controller: 'StoreCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
