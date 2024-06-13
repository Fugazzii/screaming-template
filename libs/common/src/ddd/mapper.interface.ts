export interface IMapper<
    DomainEntity,
    DbRecord,
    Response = unknown,
> {
    toPersistence(entity: DomainEntity): DbRecord;
    toDomain(record: unknown): DomainEntity;
    toResponse(entity: DomainEntity): Response;
}