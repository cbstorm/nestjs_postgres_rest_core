import { ConfigService } from '@nestjs/config';
import { dataSource, DATA_SOURCE } from './datasource';

export const databaseProviders = [
    {
        provide: DATA_SOURCE,
        useFactory: async (configuration: ConfigService) => {
            return await dataSource.initialize();
        },
        inject: [ConfigService],
    },
];
