export interface IUseCaseController<IRequest = unknown, IResponse = unknown, INext = unknown> {
    exec(request: IRequest, next?: INext): Promise<IResponse> | IResponse;
}

export interface IUseCaseService<IRequest = unknown, IResponse = unknown> {
    exec(request?: IRequest) : Promise<IResponse> | IResponse;
}