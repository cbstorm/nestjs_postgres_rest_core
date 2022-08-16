import { Repository } from 'typeorm';
import { AbstractEnity } from './entity.abstraction';

export abstract class AbstractRepository<T extends AbstractEnity> {
    protected baseRepository: Repository<T>;
    constructor(baseRepository: Repository<T>) {
        this.baseRepository = baseRepository;
    }
}
