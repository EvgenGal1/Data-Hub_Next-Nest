// ^ logger на winston
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import * as path from 'path';

// константы > команды запуска process.env.NODE_ENV
import { isProduction } from './envs/env.consts';

export const WinstonLoggerProvider = {
  provide: 'WINSTON_LOGGER',
  useFactory: () => {
    return winston.createLogger({
      // level: 'info',
      levels: winston.config.npm.levels,
      level: isProduction ? 'info' : 'debug',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({
          filename: 'application-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
          // dirname: /* isProduction ? */ 'tmp' /* : 'logs' */,
          // dirname: path.join(__dirname, 'logs'),
          // dirname: 'logs',
          dirname: path.join(process.cwd(), 'logs'),
        }),
      ],
    });
  },
};
