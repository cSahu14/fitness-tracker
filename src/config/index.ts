import { config } from 'dotenv';

config();
export const Config = {
    port: process.env.PORT,
};
