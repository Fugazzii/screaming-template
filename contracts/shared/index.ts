export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type IContract = {
    usecase: string;
    method: HttpMethod;
    path: string;
}

type Base = string | Record<string, string>;
export type QueryContractOptions<Params = Base, Query = Base> = IContract & {
    query?: Query;
    params?: Params;
};

export type CommandContractOptions<T> = IContract & {
    body: T;
};
