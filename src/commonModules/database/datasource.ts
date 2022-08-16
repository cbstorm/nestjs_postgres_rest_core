import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { AppConfigConstant } from '../appConfig/appConfig.const';

export const DATA_SOURCE = 'DATA_SOURCE';

export const databaseProviders = [
    {
        provide: DATA_SOURCE,
        useFactory: async (configuration: ConfigService) => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: configuration.get<string>(AppConfigConstant.DB_HOST),
                port: configuration.get<number>(AppConfigConstant.DB_PORT),
                username: configuration.get<string>(
                    AppConfigConstant.DB_USERNAME
                ),
                password: configuration.get<string>(
                    AppConfigConstant.DB_PASSWORD
                ),
                database: configuration.get<string>(AppConfigConstant.DB_NAME),
                entities: [__dirname + '/../../modules/**/*.entity.js'],
                synchronize: true,
                logging: ['query'],
            });

            return await dataSource.initialize();
        },
        inject: [ConfigService],
    },
];
