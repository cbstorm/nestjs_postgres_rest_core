import { CRUDRepository } from 'src/abstractions/crudRepository.abstraction';
import { DATA_SOURCE } from 'src/commonModules/database/datasource';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';

export class UserRepository extends CRUDRepository<User> {
    constructor(baseUserRepository: Repository<User>) {
        super(baseUserRepository);
    }
}

export const USER_REPOSITORY = 'USER_REPOSITORY';

export const UserProviders = [
    {
        provide: USER_REPOSITORY,
        useFactory: (datasource: DataSource) => {
            return new UserRepository(datasource.getRepository(User));
        },
        inject: [DATA_SOURCE],
    },
];
