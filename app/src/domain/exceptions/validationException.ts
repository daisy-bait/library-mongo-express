import IError from "../../common/exceptions/errorInterface";
import Exception from "../../common/exceptions/exception";

export default class ValidationException extends Exception {

    constructor(
        public message: string = 'Provided Data is invalid',
        public details: { field: string, message: string }[]
    ) {
        super(message, 400);
    }

}