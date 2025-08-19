import Exception from "../../common/exceptions/exception";

export default class NotAuthenticatedException extends Exception{

    constructor(public message: string = 'No Authenticated User') {
        super(message, 401);
    }

}