import { Commentary } from './commentary';

export class Point {

    private _picturePoint   : any; //idk
    private _name           : String;
    private _description    : String;
    private _category       : String;
    private _rating         : Array<number>;
    private _commentaries   : Array<Commentary>;

    constructor(picturePoint: any, name: String) {
        this._picturePoint = picturePoint;
        this._name = name;
    }


    public image(): any {
        return this._picturePoint;
    }

    public namePoint(): String {
        return this._name;
    }

    public setDescription(description: String) {
        this._description = description;
    }

    public description(): String {
        return this._description;
    }

    public addComment(commentary: Commentary) {
        // incompleto
        this._commentaries.push(commentary);
    }

}