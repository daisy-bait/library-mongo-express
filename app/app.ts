import express from 'express';
import mongoose from 'mongoose';
import { expressConfig } from './src/infrastructure/config/express.config';
import { serverConfig } from './src/infrastructure/config/server.config';
import { connectDb } from './src/infrastructure/config/mongodb.connection';
import UserMongoDao from './src/infrastructure/persistence/dao/UserMongoDao';
import UserEntity from './src/domain/entities/userEntity';
import coreConfig from './src/infrastructure/config/core.config';

const app = express();

// express.js config
expressConfig(app);

void connectDb(mongoose, coreConfig, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
});

// server config and launch
serverConfig(app, coreConfig);