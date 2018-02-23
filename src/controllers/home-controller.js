import {RandomNumber} from '../utils';
export default function Home ($scope){
    "ngInject";
    const randomNumber = new RandomNumber();
    $scope.test = randomNumber.getRandomNumber(3);

}