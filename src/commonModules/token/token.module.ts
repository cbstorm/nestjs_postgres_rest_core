import { DynamicModule, Module } from '@nestjs/common';
import { TokenService } from './token.service';

@Module({})
export class TokenModule {
    static forRoot(): DynamicModule {
        return {
            module: TokenModule,
            providers: [TokenService],
            exports: [TokenService],
        };
    }
}
