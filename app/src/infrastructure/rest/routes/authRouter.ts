import { Router } from "express";
import UserAuthUseCases from "../../../domain/contracts/business/userAuthUseCases";

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
    }

    public getRouter(): Router {
        return this.router;
    }
}