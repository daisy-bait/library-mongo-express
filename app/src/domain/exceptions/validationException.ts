import IError from "../../interfaces/errorInterface";

export default class ValidationException extends Error implements IError {
    public name = 'ValidationException';
    public httpStatus = 400;
    public timestamp = new Date();

    constructor(
        public message: string = 'Provided Data is invalid',
        public details: { field: string, message: string }[]
    ) {
        super(message);
        Object.setPrototypeOf(this, ValidationException.prototype);
    }

}