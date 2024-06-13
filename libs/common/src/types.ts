type Page = { page: number };
type Limit = { limit: number };
export type PaginationOptions = Page | Limit | (Page & Limit);

export type FindOneParams<Entity> = {
    where: Partial<Entity>
};
export type DeleteOneParams<Entity> = FindOneParams<Entity>;
export type DeleteManyParams<Entity> = FindOneParams<Entity>;

export type FindManyParams<Entity> = {
    where?: Partial<Entity>,
    pagination?: PaginationOptions,
    order?: "ASC" | "DESC"
};

export type CreateParams<Entity> = {
    data: Partial<Entity>
};

export type UpdateParams<Entity> = {
    where: Partial<Entity>,
    data: Partial<Entity>
};