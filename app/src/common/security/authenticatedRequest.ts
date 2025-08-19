import { Request } from "express"

interface AuthenticatedRequest extends Request {
    user?: {
        username: string,
        roles: string[],
    }
}

export default AuthenticatedRequest;