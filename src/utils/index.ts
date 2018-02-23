

interface Generator {
    getRandomNumber(num:number) : number;
}
export class RandomNumber implements Generator {
    getRandomNumber(num: number): number {
        return num;
    }
}