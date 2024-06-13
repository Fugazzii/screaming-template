import { IUseCaseController } from "@DDD";
import { Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreatePostUseCaseService } from "./create-post.service";
import { Post as PostEntity } from "@posts/domain";

@Controller()
export class CreatePostUseCaseController implements IUseCaseController<undefined, PostEntity> {
    public constructor(private readonly createPostService: CreatePostUseCaseService) {}

    @HttpCode(HttpStatus.CREATED)
    @Post("/post")
    public exec(): Promise<PostEntity> {
        return this.createPostService.exec();
    }
}