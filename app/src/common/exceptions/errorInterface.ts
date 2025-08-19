
interface IError {
    name: string,
    customMessage: string,
    httpStatus: number,
    timestamp: string,
    details?: unknown,
}

export default IError;