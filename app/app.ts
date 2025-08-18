import express from 'express';
import mongoose from 'mongoose';
import { expressConfig } from './src/infrastructure/config/express.config';
import { serverConfig } from './src/infrastructure/config/server.config';
import coreConfig from './src/infrastructure/config/core.config';
import connectDb from './src/infrastructure/config/mongodb.connection';
import routes from './src/infrastructure/rest/routes';
import UserMongoDao from './src/infrastructure/persistence/dao/userMongoDao';

const app = express();

// express.js config
expressConfig(app);

connectDb(mongoose, coreConfig, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
});

// server config and launch
serverConfig(app, coreConfig, new UserMongoDao());

// routes config and launch
routes(app);