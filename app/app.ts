import express from 'express';
import dotenv from 'dotenv';
import coreConfig from './src/infrastructure/config/core.config';
import mongoose from 'mongoose';
import { expressConfig } from './src/infrastructure/config/express.config';
import { serverConfig } from './src/infrastructure/config/server.config';
import { connectDb } from './src/infrastructure/config/mongodb.connection';

const app = express();

dotenv.config();

// express.js config
expressConfig(app);

void connectDb(mongoose, coreConfig, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
});

// server config and launch
serverConfig(app, coreConfig);