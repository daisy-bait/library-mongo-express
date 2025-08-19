import { Request, Response, NextFunction } from "express";
import decodeBasicAuth from "../../../common/utils/decodeBasicAuth";
import NotAuthenticatedException from "../../../domain/exceptions/notAuthenticatedException";
import UserAuthUseCases from "../../../domain/contracts/business/userAuthUseCases";
import BadCredentialsException from "../../../domain/exceptions/badCredentialsException";
import AuthControllerImpl from "../../../application/controller/authControllerImpl";
import UserMongoDao from "../../persistence/dao/userMongoDao";
import AuthenticatedRequest from "../../../common/security/authenticatedRequest";

export default function authMiddleware(authController: UserAuthUseCases = new AuthControllerImpl(new UserMongoDao())): ((req: Request, res: Response, next: NextFunction) => Promise<void>) {
    // Because Express wait the middleware returns something with the Express Middlewares Sign, i.e. (req, res, next)
    // And in this Middleware we need inject an mandatory AuthContollerImpl.
    return async (
        request: AuthenticatedRequest,
        response: Response,
        next: NextFunction,
    ): Promise<void> => {
        const authHeader = request.headers.authorization!;
        if (!authHeader) { throw new NotAuthenticatedException('Missing Authorization Header...') }

        const { decodedUsername, decodedPassword } = decodeBasicAuth(authHeader);

        const userDetails = await authController.retrieveUserDetails(decodedUsername);

        if (!authController.comparePasswords(decodedPassword, userDetails.password)) {
            throw new BadCredentialsException();
        }

        request.user = {
            username: userDetails.username,
            roles: userDetails.roles,
        }

        next();
    }
}