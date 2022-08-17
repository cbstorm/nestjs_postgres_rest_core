import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { AppConfigConstant } from '../appConfig/appConfig.const';

config();
const configuration = new ConfigService();

export const DATA_SOURCE = 'DATA_SOURCE';

export const dataSource = new DataSource({
    type: 'postgres',
    host: configuration.get<string>(AppConfigConstant.DB_HOST),
    port: configuration.get<number>(AppConfigConstant.DB_PORT),
    username: configuration.get<string>(AppConfigConstant.DB_USERNAME),
    password: configuration.get<string>(AppConfigConstant.DB_PASSWORD),
    database: configuration.get<string>(AppConfigConstant.DB_NAME),
    entities: [__dirname + '/../../modules/**/*.entity.js'],
    synchronize: false,
    logging: ['error'],
    migrations: [__dirname + '/migrations/*.migration{.ts,.js}'],
});
