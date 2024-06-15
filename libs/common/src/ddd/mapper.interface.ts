//* toDomain: DatabaseModel -> DomainEntity
//* toPersistence: DomainEntity -> DatabaseModel
//* toResponse: DomainEntity -> Response

export interface IMapper<
    DomainEntity,
    DatabaseModel,
    Response = unknown,
> {
    toDomain(dto: unknown): DomainEntity;
    toPersistence(entity: DomainEntity): DatabaseModel;
    toResponse(entity: DomainEntity): Response;
}