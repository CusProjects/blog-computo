/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2014 Webapplayers.com
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($httpProvider, $stateProvider, $urlRouterProvider) {

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "views/main.html",
            controller: "MainCtrl",
            controllerAs: "main",
            data: { pageTitle: 'Example view' }
        })
        .state('minor', {
            url: "/minor",
            templateUrl: "views/minor.html",
            data: { pageTitle: 'Example view' }
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl',
            data: {pageTitle: 'Home'}
        })
        .state('topic', {
            url: '/topic/:topicId',
            templateUrl: 'views/topic.html',
            controller: 'TopicCtrl',
            data: {pageTitle: 'Details'}
        })
        .state('newTopic', {
            url:'/newTopic',
            templateUrl: 'views/newTopic.html',
            controller: 'NewTopicCtrl',
            data: {pageTitle: 'New Topic'}
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
        $rootScope.server = "http://localhost/blog/public/api/"
    });