
interface IError {
    name: string
    message: string
    httpStatus: number
    timestamp: Date
    details?: unknown
}

export default IError;