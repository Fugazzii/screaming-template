import { IUseCaseController } from "@DDD";
import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes } from "@nestjs/common";
import { CreatePostUseCaseService } from "./create-post.service";
import { PostMapper } from "@posts/domain";
import { CreatePostDTO, CreatePostSchema } from "@contracts/create-post";
import { ZodValidationPipe } from "nestjs-zod";
import { PostResponseDTO } from "@posts/post.response.dto";

@Controller()
export class CreatePostUseCaseController implements IUseCaseController<undefined, PostResponseDTO> {
    public constructor(private readonly createPostService: CreatePostUseCaseService) {}

    @UsePipes(new ZodValidationPipe(CreatePostSchema))
    @HttpCode(HttpStatus.CREATED)
    @Post("/post")
    public async exec(@Body() createPostDTO: CreatePostDTO) {
        try {
            const data = await this.createPostService.exec(PostMapper.toDomain(createPostDTO));
            return {
                data: PostMapper.toResponse(data),
                message: "Post created successfully"
            };
        } catch (error) {
            return {
                error,
                message: "An error occurred while creating the post"
            };
        }
    }
}