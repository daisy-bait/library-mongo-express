import { Express } from "express";
import AuthRouter from "./authRouter";
import AuthControllerImpl from "../../../application/controller/authControllerImpl";
import UserControllerImpl from "../../../application/controller/userControllerImpl";
import UserMongoDao from "../../persistence/dao/userMongoDao";

export default function routes(app: Express): void {
    app.use('/api/auth', new AuthRouter(new AuthControllerImpl(new UserMongoDao())).getRouter());
    //app.use('/api/users')
    //app.use('/api/authors');
    //app.use('/api/books');
}