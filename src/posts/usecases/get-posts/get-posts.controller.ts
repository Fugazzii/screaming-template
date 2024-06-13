import { IUseCaseController } from "@DDD";
import { Controller, Get } from "@nestjs/common";
import { GetPostsUseCaseService } from "./get-posts.service";
import { Post } from "@posts/domain";

@Controller("/")
export class GetPostsController implements IUseCaseController {
    public constructor(private readonly getPostsUseCase: GetPostsUseCaseService) {}
    
    @Get("/posts")
    public exec(): Promise<Post[]> {
        return this.getPostsUseCase.exec();
    }
}