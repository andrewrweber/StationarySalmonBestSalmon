'use strict';

/**
 * @ngdoc overview
 * @name stationarySalmonBestSalmonApp
 * @description
 * # stationarySalmonBestSalmonApp
 *
 * Main module of the application.
 */
var app  = angular
  .module('stationarySalmonBestSalmonApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '../views/eventFeed.html'
  })
  .state('myGroups', {
    url: '/myGroups',
    templateUrl: '../views/myGroups.html'
  })
  .state('event', {
    url: '/event',
    templateUrl: '../views/event.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: '../views/login.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: '../views/signup.html'
  })
});

