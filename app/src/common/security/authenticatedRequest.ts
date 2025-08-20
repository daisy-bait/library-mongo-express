import { Request } from "express"
import UserDetails from "./userDetails";

interface AuthenticatedRequest extends Request {
    user?: UserDetails;
}

export default AuthenticatedRequest;