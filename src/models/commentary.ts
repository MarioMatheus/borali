import { User } from './user'

export class Commentary {

    private _user     : User;
    private _content  : String;
    private _datePost : Date;

    constructor(user: User, content: String, datePost: Date) {
        this._user = user;
        this._content = content;
        this._datePost = datePost;
    }

}