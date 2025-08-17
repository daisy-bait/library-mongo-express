import { Express } from 'express';
import coreConfig from './core.config';

export const serverConfig =  ( app: Express, config: typeof coreConfig): void => {
    try {
        const port = config.port;

        app.listen(port, () => {
            console.log(`SERVER RUNNING ON PORT ${port}`);
        });
    } catch (ex) {
        console.error('FAILED TO START SERVER', ex);
        process.exit(1);
    }
};