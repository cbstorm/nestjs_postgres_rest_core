import { Module } from '@nestjs/common';
import { AppConfigModule } from './commonModules/appConfig/appConfig.module';
import { DatabaseModule } from './commonModules/database/database.module';
import { TokenModule } from './commonModules/token/token.module';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [DatabaseModule, AppConfigModule, TokenModule, UserModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
