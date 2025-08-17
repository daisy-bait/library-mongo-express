import mongoose, { ConnectOptions } from "mongoose";
import coreConfig from "./core.config";

interface MongoOptions extends ConnectOptions {
  reconnectInterval: number;
}

export const connectDb = async (
  config: typeof coreConfig,
  options: MongoOptions
): Promise<void> => {
  try {
    await mongoose.connect(config.mongo.uri as string, options);
    console.info('MONGODB INITIAL CONNETION SUCCESFUL');
  } catch (ex) {
    console.error('MONGODB CONNECTION ERROR:', ex);
  }

  mongoose.connection.on('connected', () => {
    console.info('CONNECTED TO MONGODB');
  });

  mongoose.connection.on('reconnected', () => {
    console.info('MONGODB RECONNECTED');
  });

  mongoose.connection.on('error', (ex: Error) => {
    console.error(`MONGODB CONNECTION ERROR: ${ex.message}`);
    void mongoose.disconnect();
  });

  mongoose.connection.on('disconnected', () => {
    console.error(`MONGODB DISCONNETED... RECONNECTION IN ${(options.reconnectInterval / 1000).toString()}s...`);
    setTimeout(() => void connectDb(config, options), options.reconnectInterval);
  });

};