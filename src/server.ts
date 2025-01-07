import { Config } from './config';
import app from './app';

const startServer = () => {
    try {
        const port = Config.port;
        app.listen(port, () => {
            console.log(`Server start at port ${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();
