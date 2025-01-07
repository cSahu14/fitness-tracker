import { Config } from './config';
import app from './app';
import logger from './config/logger';

const startServer = () => {
    try {
        const port = Config.port;
        app.listen(port, () => {
            logger.info('Server listening on port', { port });
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();
