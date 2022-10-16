import { CRUDRepository } from 'src/abstractions/crudRepository.abstraction';
import { Repository } from 'typeorm';
import { User } from './user.entity';

export class UserRepository extends CRUDRepository<User> {
    constructor(baseUserRepository: Repository<User>) {
        super(baseUserRepository);
    }
}

export const USER_REPOSITORY = 'USER_REPOSITORY';
