import IError from "../../common/errorInterface";

export default class NotFoundException extends Error implements IError {
    public name = 'NotFoundException';
    public httpStatus = 404;
    public timestamp = new Date();

    constructor(public message = 'Record Not Found') {
        super(message);
        Object.setPrototypeOf(this, NotFoundException.prototype);
    }

}