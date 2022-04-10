import server from "./server.js";
import { logger } from './util.js';
import config from './config.js';

server.listen(config.port)
.on('listening', () => { 
    logger.info(`rodandooo na porta ${config.port}`);
});

//impede que a aplicação caio caso um erro nao tratado aconteça
//throw
process.on('uncaughtException', (error) => logger.error(`unhandledRejection happened: ${error.stack || error}`));
//promises
process.on('unhandledRejection', (error) => logger.error(`unhandledRejection happened: ${error.stack || error}`));