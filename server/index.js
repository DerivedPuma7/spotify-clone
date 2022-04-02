import server from "./server.js";
import { logger } from './util.js';
import config from './config.js';

server.listen(config.port)
.on('listening', () => { 
    logger.info(`rodandooo na porta ${config.port}`);
});