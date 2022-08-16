import { DeepPartial, Repository } from 'typeorm';
import { AbstractEnity } from './entity.abstraction';
import { AbstractRepository } from './repository.abstraction';

export abstract class CRUDRepository<
    T extends AbstractEnity
> extends AbstractRepository<T> {
    constructor(baseRepository: Repository<T>) {
        super(baseRepository);
    }
    async create(data: DeepPartial<T>): Promise<T> {
        const doc = this.baseRepository.create(data);
        return this.baseRepository.save(doc);
    }
}
