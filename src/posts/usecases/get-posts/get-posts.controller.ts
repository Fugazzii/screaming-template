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

    @Get("/world")
    @Version("1")
    public getHello1(): object {
        return { data: "version 1" };
    }
  
    @Get("/world")
    @Version("2")
    public getHello2(): object {
        return { data: "version 2" };
    }
}