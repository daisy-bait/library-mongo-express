import IError from "../../common/errorInterface";

export default class NotAuthenticatedException extends Error implements IError {
    public name = 'NotAuthorizedException';
    public httpStatus = 401;
    public timestamp = new Date();

    constructor(public message: string = 'No Authenticated User') {
        super(message);
        Object.setPrototypeOf(this, NotAuthenticatedException.prototype);
    }

}