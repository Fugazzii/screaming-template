import { IUseCaseController } from "@DDD";
import { Controller, Get, Version } from "@nestjs/common";
import { GetPostsUseCaseService } from "./get-posts.service";
import { Post } from "@posts/domain";

@Controller()
export class GetPostsController implements IUseCaseController {
    public constructor(private readonly getPostsUseCase: GetPostsUseCaseService) {}
    
    @Get("/posts")
    public exec(): Promise<Post[]> {
        return this.getPostsUseCase.exec();
    }

    @Version("1")
    @Get("/world")
    public getHello1(): string {
        return "version 1";
    }
  
    @Version("2")
    @Get("/world")
    public getHello2(): string {
        return "version 2";
    }
}