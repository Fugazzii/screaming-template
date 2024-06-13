import { IMapper } from "@DDD";

export class PostMapper implements IMapper<{}, {}, {}> {
    toPersistence(entity: {}): {} {
        return entity;
    }

    toDomain(record: unknown): {} {
        return record;
    }

    toResponse(entity: {}): {} {
        return entity;
    }
}