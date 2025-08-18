import IError from "../../common/errorInterface";

export default class BadCredentialsException extends Error implements IError {
    public name = 'BadCredentialsException';
    public httpStatus = 401;
    public timestamp = new Date();

    constructor(public message: string = 'Invalid username or password') {
        super(message);
        Object.setPrototypeOf(this, BadCredentialsException.prototype);
    }

}