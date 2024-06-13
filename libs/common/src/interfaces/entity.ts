export type AggregateID = string | number;

type Dates = {
    createdAt: Date,
    updatedAt: Date
};

export type IEntity = Dates & {
    id: AggregateID
};

export type ICreateEntity<T> = Partial<Dates> & {
    id: AggregateID,
    data: T
};

