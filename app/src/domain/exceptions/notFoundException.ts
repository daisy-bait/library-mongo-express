import IError from "../../common/exceptions/errorInterface";
import Exception from "../../common/exceptions/exception";

export default class NotFoundException extends Exception {

    constructor(public message = 'Record Not Found') {
        super(message, 404);
    }

}