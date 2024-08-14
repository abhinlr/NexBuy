import winston from 'winston';
import colors from 'colors';

colors.setTheme({
    info: 'cyan',
    warn: 'yellow',
    error: 'red',
    debug: 'blue'
});

const customFormat = winston.format.printf(({ timestamp, level, message }) => {
    let coloredLevel = level;
    let coloredMessage = message;

    switch (level) {
        case 'info':
            coloredLevel = colors.info(level);
            coloredMessage = colors.info(message);
            break;
        case 'warn':
            coloredLevel = colors.warn(level);
            coloredMessage = colors.warn(message);
            break;
        case 'error':
            coloredLevel = colors.error(level);
            coloredMessage = colors.error(message);
            break;
        case 'debug':
            coloredLevel = colors.debug(level);
            coloredMessage = colors.debug(message);
            break;
        default:
            break;
    }

    return `${timestamp} ${coloredLevel}: ${coloredMessage}`;
});

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        customFormat
    ),
    transports: [
        new winston.transports.Console()
    ]
});

export default logger;
