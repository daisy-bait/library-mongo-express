import { Request, Response, NextFunction } from "express";
import IError from "../../../common/exceptions/errorInterface";
import Exception from "../../../common/exceptions/exception";
import timeFormat from "../../../common/utils/timeFormat";

export default function ExceptionHandlingMiddleware(
    exception: Exception & Error,
    request: Request,
    response: Response,
    next: NextFunction
): Response {
    const statusCode: number = exception.httpStatus || 500;
    return response.status(statusCode).json({
        name: exception.name,
        message: exception.message === '' ? exception.stack?.toString() : exception.message,
        statusCode,
        timestamp: exception.timestamp === undefined ? timeFormat(new Date()) : exception.timestamp,
        path: request.originalUrl,
    });
}