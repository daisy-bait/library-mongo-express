import { Router } from "express";
import UserAuthUseCases from "../../../domain/contracts/business/userAuthUseCases";
import authMiddleware from "../middlewares/authProviderMiddleware";
import AuthReq from "../../../common/security/authenticatedRequest";

export default class AuthRouter {
    private readonly router: Router;

    constructor(private readonly authController: UserAuthUseCases) {
        this.router = Router();
        this.registerRoutes();
    }

    private registerRoutes(): void {
        this.router.post('/login',
            async (req, res) => {
                const { username, password } = req.query;
                const resolvedCredentials = await this.authController.login(username as string, password as string);
                res.status(200).json(resolvedCredentials);
            }
        );
        this.router.post('/roles',
            authMiddleware(),
            async (req: AuthReq, res) => {
                const resolvedRoles = await this.authController.retrieveAuthRoles(req.user!);
                res.status(200).json(resolvedRoles);
            }
        );
        this.router.post('/id',
            authMiddleware(),
            async (req: AuthReq, res) => {
                const resolvedId = await this.authController.retrieveAuthId(req.user!)
                res.status(200).json(resolvedId);
            }
        );
    }

    public getRouter(): Router {
        return this.router;
    }
}