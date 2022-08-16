import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import jwt from 'jsonwebtoken';

@Injectable()
export class TokenService {
    constructor(private configuration: ConfigService) {}
    async sign(payload: any, expiresIn: number) {
        return new Promise((resolve, reject) => {
            jwt.sign(
                payload,
                this.configuration.get<string>('SECRET_KEY'),
                {
                    issuer: this.configuration.get<string>('PROJECT_NAME'),
                    expiresIn: expiresIn,
                },
                (err, encoded) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(encoded);
                    }
                }
            );
        });
    }
    async verify(token: string) {
        return new Promise((resolve, reject) => {
            jwt.verify(
                token,
                this.configuration.get('SECRET_KEY'),
                (err, decoded) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(decoded);
                    }
                }
            );
        });
    }
}
