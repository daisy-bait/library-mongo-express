import { Mongoose, ConnectOptions } from "mongoose";
import coreConfig from "./core.config";

interface MongoOptions extends ConnectOptions {
  serverSelectionTimeoutMS: number,
  socketTimeoutMS: number,
}

export const connectDb = async (
  client: Mongoose,
  config: typeof coreConfig,
  options: MongoOptions
): Promise<void> => {
  try {
    await client.connect(config.mongo.uri, options);
    console.info('MONGODB INITIAL CONNETION SUCCESFUL');
  } catch (ex) {
    console.error('MONGODB INITIAl CONNECTION ERROR:', ex);
    console.info(`Retrying in  ${(coreConfig.mongo.retryInterval / 1000).toString()}s...`);
    setTimeout(() => void connectDb(client, config, options), coreConfig.mongo.retryInterval);
  }

  client.connection.on('connected', () => {
    console.info('CONNECTED TO MONGODB');
  });

  client.connection.on('reconnected', () => {
    console.info('MONGODB RECONNECTED');
  });

  client.connection.on('error', (ex: Error) => {
    console.error(`MONGODB CONNECTION ERROR: ${ex.message}`);
    void client.disconnect();
  });

  client.connection.on('disconnected', () => {
    console.error(`MONGODB DISCONNETED... RECONNECTION IN ${(coreConfig.mongo.retryInterval / 1000).toString()}s...`);
    setTimeout(() => void connectDb(client, config, options), coreConfig.mongo.retryInterval);
  });

};