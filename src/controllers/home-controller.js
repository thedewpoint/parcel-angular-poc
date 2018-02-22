/*@ngInject*/
import {RandomNumber} from '../utils';
export default function Home ($scope){
    const randomNumber = new RandomNumber();
    $scope.test = randomNumber.getRandomNumber();

}