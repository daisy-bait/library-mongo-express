import Exception from "../../common/exceptions/exception";

export default class BadCredentialsException extends Exception  {

    constructor(public message: string = 'Invalid username or password') {
        super(message, 401);
    }

}