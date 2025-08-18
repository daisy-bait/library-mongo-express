import { Express } from 'express';
import coreConfig from './core.config';
import UserDataLoader from './loaders/userDataLoader';
import UserMongoDao from '../persistence/dao/userMongoDao';

export const serverConfig =  ( app: Express, config: typeof coreConfig): void => {
    try {
        const port = config.port;

        app.listen(port, async () => {
            console.log(`SERVER RUNNING ON PORT ${port}`);
            await new UserDataLoader(new UserMongoDao()).run();
        });
    } catch (ex) {
        console.error('FAILED TO START SERVER', ex);
        process.exit(1);
    }
};