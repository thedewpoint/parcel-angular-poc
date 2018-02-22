import angular from 'angular';
import HomeController from './home-controller';
const controllerModule = angular.module('app.controllers',[]);
controllerModule.controller('homeController', HomeController);
export default controllerModule.name;