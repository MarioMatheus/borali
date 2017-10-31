import { Commentary } from './commentary';

export class User {

    private _id           : any; //idk oq o firebase vai dah
    private _nome         : String;
    private _photoProfile : any;
    private _followers    : Array<User>;
    private _following    : Array<User>;

    constructor() {

    }

    public commentPoint(content: String) {
        var date = new Date();

        let commentary = new Commentary(
            this,
            content,
            date
        );
    }

}