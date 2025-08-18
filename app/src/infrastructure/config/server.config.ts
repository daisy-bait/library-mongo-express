import { Express } from 'express';
import coreConfig from './core.config';
import UserDataLoader from './loaders/userDataLoader';
import UserDAO from '../../domain/contracts/persistence/UserDAO';
import AuthControllerImpl from '../../application/controller/authControllerImpl';

export const serverConfig =  ( app: Express, config: typeof coreConfig, userDAO: UserDAO): void => {
    try {
        const port = config.port;

        app.listen(port, async () => {
            console.log(`SERVER RUNNING ON PORT ${port}`);
            await new UserDataLoader(userDAO, new AuthControllerImpl(userDAO)).run();
        });
    } catch (ex) {
        console.error('FAILED TO START SERVER', ex);
        process.exit(1);
    }
};