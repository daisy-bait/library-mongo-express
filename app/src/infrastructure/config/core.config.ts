import dotenv from "dotenv";

dotenv.config();

export default {
    port: process.env.PORT || '3000',
    mongo: {
        uri: process.env.MONGO_URL || 'mongodb://localhost:27017/stack',
        retryInterval: parseInt(process.env.RETRY_INTERVAL || '0') || 0,
    }
};