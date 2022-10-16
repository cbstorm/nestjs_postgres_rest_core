import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository, USER_REPOSITORY } from './user.repo';

@Injectable()
export class UserService {
    constructor(
        @Inject(USER_REPOSITORY) private userRepository: UserRepository
    ) {}

    create(createUserDto: CreateUserDto) {
        return this.userRepository.create(createUserDto);
    }

    findAll() {
        return `This action returns all user`;
    }

    findOne(id: string) {
        return `This action returns a #${id} user`;
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: string) {
        return this.userRepository.deleteOne(id);
    }
}
