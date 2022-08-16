import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigConstant } from './commonModules/appConfig/appConfig.const';

(async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    await app.listen(
        configService.get<number>(AppConfigConstant.APP_PORT) || 3000
    );
})();
