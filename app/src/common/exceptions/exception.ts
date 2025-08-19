import timeFormat from "../utils/timeFormat";
import IError from "./errorInterface";

export default class Exception extends Error implements IError {

    public timestamp = timeFormat(new Date());

    constructor(
        public customMessage: string,
        public httpStatus = 500,
    ) {
        super(customMessage);

        this.name = new.target.name;
    }
    
}