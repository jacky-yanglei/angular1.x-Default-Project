"use strict";
myApp.config(["$stateProvider", "$urlRouterProvider",
    function ($stateProvider,$urlRouterProvider) {
        //默认跳转的路由;
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state("home", {
            url:'/home',
            templateUrl:"/views/home/home.html?d=" + new Date().getTime(),
            controller:'homeCtrl',
            resolve: {
                deps: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["/controllers/home/home.js?d=" + new Date().getTime()]);
                }]
            }
        })
    }]);
