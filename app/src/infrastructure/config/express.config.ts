import express, {Express} from 'express';
import morgan from 'morgan';

export const expressConfig = (app: Express): void => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan('dev'));
};