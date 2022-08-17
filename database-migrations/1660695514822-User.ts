import { MigrationInterface, QueryRunner } from "typeorm";

export class User1660695514822 implements MigrationInterface {
    name = 'User1660695514822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "isActive" TO "email"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "email" TO "isActive"`);
    }

}
